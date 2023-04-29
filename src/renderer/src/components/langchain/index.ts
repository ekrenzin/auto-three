import { OpenAI } from 'langchain/llms/openai'

class LangChain {
  private static instance: LangChain
  private model: OpenAI

  private constructor(OPENAI_API_KEY: string) {
    const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 })
    this.model = model
  }

  public static init(OPENAI_API_KEY: string): void {
    if (!LangChain.instance) {
      LangChain.instance = new LangChain(OPENAI_API_KEY)
    }
  }

  public static getInstance(): LangChain {
    LangChain.validateLangChain()
    return LangChain.instance
  }

  public static getModel(): OpenAI {
    LangChain.validateLangChain()
    return LangChain.instance.model
  }

  public async complete(prompt: string): Promise<string> {
    const completion = await this.model.call(prompt)
    return completion
  }

  private static validateLangChain(): void {
    if (!LangChain.instance) throw new Error('LangChain instance not initialized');
  }
}

export { LangChain }
