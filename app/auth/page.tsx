import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import SignInWithGitHub from "../components/SignInWithGitHub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "../components/SignInForm";


export default async function AuthRoute (){

    const session = await getServerSession(authOptions);

    if(session){
        return redirect('/');
    }
    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
            <CardHeader>
                <CardTitle className="text-xl">
                    Please Sign In
                </CardTitle>
                <CardDescription>
                Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col">
                    <SignInForm />
                    
                    <SignInWithGitHub />
                    
                </div>
            </CardContent>
        </Card>
        </div>
    )
}