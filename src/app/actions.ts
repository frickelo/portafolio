'use server';

import { z } from 'zod';
import { filterContactFormSpam } from '@/ai/flows/filter-contact-form-spam';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'There was an error with your submission. Please check the fields and try again.',
    };
  }

  try {
    const spamCheck = await filterContactFormSpam(validatedFields.data);

    if (spamCheck.isSpam) {
      console.log(`Spam detected: ${spamCheck.reason}. Submission from ${validatedFields.data.email} blocked.`);
      // We still return a success message to avoid alerting spammers.
      // The message is just not processed further.
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      };
    }

    // Here you would typically process the non-spam message,
    // e.g., send an email, save to a database, etc.
    console.log('Received valid message:', validatedFields.data);

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}
