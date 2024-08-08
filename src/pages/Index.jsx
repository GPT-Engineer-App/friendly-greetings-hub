import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Hello, World!</h1>
        <p className="text-xl text-gray-600 mb-6">Welcome to our simple and friendly React application.</p>
        <Button variant="outline">Get Started</Button>
      </div>
    </div>
  );
};

export default Index;
