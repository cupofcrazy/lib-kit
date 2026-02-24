export interface GreetingOptions {
  punctuation?: string
}

export function greet(name: string, options: GreetingOptions = {}): string {
  const punctuation = options.punctuation ?? '!'
  return `Hello, ${name}${punctuation}`
}

export * from './Greeting'
