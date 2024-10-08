import Link from "next/link";

import { UserAuthForm } from "./components/user-auth-form";

export const metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
};

export default function Login() {
  return (
    <>
      <div className="absolute md:hidden justify-center w-screen bg-slate-800 shadow-xl py-2 flex">
        <img alt="" src="./zali_logo.png" className="h-14 w-auto"></img>
      </div>
      <div className="container relative h-screen flex-col items-center justify-center grid max-w-none md:grid-cols-2 md:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r md:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img alt="" src="./zali_logo.png" className="h-14 w-auto"></img>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 px-8 sm:w-[350px] sm:px-0">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Entre ou Cadastre-se
              </h1>
              <p className="text-sm text-muted-foreground">
                Digite seu email abaixo para continuar
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Ao clicar em continuar, você aceita nossos{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
