import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "@/components/ui/Button.jsx";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import bgGunung from "@/assets/backgroundGunung_Login&SignUp.png";
import { registerService } from "@/api/services/auth";

import { toast } from "sonner"; 

export default function SignUpPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); 

    try {
      const response = await registerService(username,email, password);

      toast.success("Register Berhasil!", {
        description: "Silahkan Login di CodeQuest.",
        duration: 3000, 
      });

      const usernames = response.username || response.data?.username;

      if (usernames ) {
        localStorage.setItem("username", usernames);
        
       
        setTimeout(() => {
             navigate("/login");
        }, 1000); 

      } else {
        toast.warning("Token Hilang", {
            description: "Register sukses tapi token tidak ditemukan."
        });
      }

    } catch (err) {
      console.error("Register Error:", err);
      
      toast.error("Register Gagal", {
        description: err.message || "Email atau password salah.",
      });
      
      setError("Terjadi Kesalahan , Error username or Pasword salah."); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgGunung})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-white mb-10 tracking-wide drop-shadow-md">
          Register
        </h1>

        {/* Kalau mau pakai Toast doang, bagian {error && ...} ini bisa dihapus biar bersih */}
        {error && (
          <div className="w-full bg-red-500/80 text-white text-sm p-3 rounded-lg mb-4 text-center border border-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="w-full space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-base font-semibold ml-1">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Masukan username..."
              className="bg-transparent border-white/60 text-white placeholder:text-gray-400 rounded-xl h-12 focus-visible:ring-offset-0 focus-visible:border-white focus-visible:ring-white/50 backdrop-blur-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-base font-semibold ml-1">
              E-Mail
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Masukan email..."
              className="bg-transparent border-white/60 text-white placeholder:text-gray-400 rounded-xl h-12 focus-visible:ring-offset-0 focus-visible:border-white focus-visible:ring-white/50 backdrop-blur-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white text-base font-semibold ml-1">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Masukan password..."
              className="bg-transparent border-white/60 text-white placeholder:text-gray-400 rounded-xl h-12 focus-visible:ring-offset-0 focus-visible:border-white focus-visible:ring-white/50 backdrop-blur-sm"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg h-12 rounded-full mt-4 shadow-lg border-0 disabled:opacity-70"
          >
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </form>

        <div className="mt-4 text-white text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-amber-500 hover:text-amber-400 underline decoration-2 underline-offset-4 bg-black/20 px-1 rounded"
          >
            Login 
          </Link>
        </div>

        <div className="relative w-full my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/40"></span>
          </div>
          <div className="relative flex justify-center text-sm bg-transparent px-4">
            <span className="text-white font-medium text-lg">Or</span>
          </div>
        </div>

        <Button
          variant="outline"
          type="button"
          className="w-full bg-black hover:bg-black/80 text-white border-none h-12 rounded-full flex items-center justify-center gap-2 shadow-lg"
          onClick={() => toast.info("Fitur Google Register", { description: "Sedang dalam pengembangan." })}
        >
          <div className="bg-white p-1 rounded-full w-6 h-6 flex items-center justify-center">
             {/* SVG Google tetap sama */}
            <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          </div>
          Register with Google
        </Button>
      </div>
    </div>
  );
}