import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle registration here
    console.log("Sign up with:", formData);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-purple/10 to-brand-teal/10 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex flex-col items-center">
          <span className="bg-brand-purple/10 rounded-full p-3 mb-2">
            <UserPlus className="w-8 h-8 text-brand-purple" />
          </span>
          <Logo size="large" />
        </div>
        <h2 className="mt-4 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-brand-purple hover:text-brand-purple/90">
            Sign in
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </Label>
                <div className="mt-1">
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </Label>
                <div className="mt-1">
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company name
              </Label>
              <div className="mt-1">
                <Input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </Label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-brand-purple focus:ring-brand-purple border-gray-300 rounded"
              />
              <Label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{" "}
                <a href="#" className="text-brand-purple hover:text-brand-purple/90">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-brand-purple hover:text-brand-purple/90">
                  Privacy Policy
                </a>
              </Label>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-brand-purple hover:bg-brand-purple/90"
              >
                Create account
              </Button>
            </div>
          </form>
          <div className="mt-8">
            <div className="flex items-center justify-center">
              <span className="w-1/5 border-t border-gray-300"></span>
              <span className="mx-4 text-gray-400 text-xs">or sign up with</span>
              <span className="w-1/5 border-t border-gray-300"></span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <Button
                  variant="outline"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Google
                </Button>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Microsoft
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
