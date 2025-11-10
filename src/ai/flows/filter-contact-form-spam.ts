'use server';

/**
 * @fileOverview Filters spam from contact form submissions.
 *
 * - filterContactFormSpam - A function that filters spam from contact form submissions.
 * - FilterContactFormSpamInput - The input type for the filterContactFormSpam function.
 * - FilterContactFormSpamOutput - The return type for the filterContactFormSpam function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FilterContactFormSpamInputSchema = z.object({
  message: z.string().describe('The message from the contact form.'),
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email of the person submitting the form.'),
});
export type FilterContactFormSpamInput = z.infer<typeof FilterContactFormSpamInputSchema>;

const FilterContactFormSpamOutputSchema = z.object({
  isSpam: z.boolean().describe('Whether the message is spam or not.'),
  reason: z.string().optional().describe('The reason why the message is considered spam.'),
});
export type FilterContactFormSpamOutput = z.infer<typeof FilterContactFormSpamOutputSchema>;

export async function filterContactFormSpam(input: FilterContactFormSpamInput): Promise<FilterContactFormSpamOutput> {
  return filterContactFormSpamFlow(input);
}

const prompt = ai.definePrompt({
  name: 'filterContactFormSpamPrompt',
  input: {schema: FilterContactFormSpamInputSchema},
  output: {schema: FilterContactFormSpamOutputSchema},
  prompt: `You are a spam filter for a contact form. You will determine if the message is spam or not.
  Consider the message, name, and email.  If the message is spam, set isSpam to true and provide a reason.
  If the message is not spam, set isSpam to false.

  Message: {{{message}}}
  Name: {{{name}}}
  Email: {{{email}}}`, 
});

const filterContactFormSpamFlow = ai.defineFlow(
  {
    name: 'filterContactFormSpamFlow',
    inputSchema: FilterContactFormSpamInputSchema,
    outputSchema: FilterContactFormSpamOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
