import { OpenAI } from 'langchain/llms/openai'

class LangChain {
  private static instance: LangChain
  private model: OpenAI

  private constructor(OPENAI_API_KEY: string) {
    const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 })
    this.model = model
  }

  public static getInstance(OPENAI_API_KEY?: string): LangChain {
    if (!OPENAI_API_KEY) return LangChain.instance
    if (!LangChain.instance) {
      LangChain.instance = new LangChain(OPENAI_API_KEY)
    }
    return LangChain.instance
  }

  public async complete(prompt: string): Promise<string> {
    const completion = await this.model.call(prompt)
    return completion
  }
}

export { LangChain }
