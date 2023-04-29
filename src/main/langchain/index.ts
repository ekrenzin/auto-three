import { OpenAI } from 'langchain/llms/openai'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export class LangChain {
  private model: OpenAI

  private constructor() {
    const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 })
    this.model = model
  }

  public async complete(prompt: string): Promise<string> {
    const completion = await this.model.call(prompt)
    return completion
  }
}
