
import LoginForm from '../components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
