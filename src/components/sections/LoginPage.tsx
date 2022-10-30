import { User } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAppStore } from "~/context/use-app-store";
import GoogleIcon from "~/icons/GoogleIcon";
import Logo from "~/icons/Logo";
import { toastErrorConfig, toastSuccessConfig } from "~/lib/constants";
import { formatError } from "~/lib/utils";
import { SignInWithGoogle } from "~/lib/utils/auth";
import Container from "../layout/container";
import Button from "../primitives/Button/Button";
import Card from "../primitives/Card/Card";

function Login() {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const user: User = (await SignInWithGoogle()) as User;

      toast("", toastSuccessConfig);
      router.push(
        {
          pathname: "/",
          query: { login: "success", email: user.email },
        },
        undefined,
        { shallow: true }
      );
    } catch (error) {
      toast(formatError(error).message, toastErrorConfig);
    }
  };

  return (
    <Container className="max-w-[400px]" centered>
      <Card className="py-16">
        <div className="flex flex-col items-center justify-center">
          <Logo />

          <h1 className="text-center text-[28px] mt-8 font-ne">
            Sign in to <span className="font-bold">Ffmpeg-nextjs</span>
          </h1>

          <Button
            onClick={handleSignIn}
            label="login-with-goole"
            className="mt-14 !font-medium px-8 gap-2 bg-white/5 border-opacity-30 backdrop-blur-sm"
          >
            <GoogleIcon /> Continue with Google
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Login;
