import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Page",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Welcome to our recipe community! 🍴 Here, food lovers can discover,
        share, and enjoy recipes from around the world. Whether you’re a
        beginner in the kitchen or a passionate cook, our platform is the
        perfect place to find inspiration for your next meal.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        We believe that cooking is more than just preparing food — it’s about
        creativity, sharing, and bringing people together. That’s why we created
        a space where everyone can contribute their favorite recipes and explore
        new ones every day.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Join us, share your best dishes, and let’s make cooking simple, fun, and
        delicious!
      </p>
    </div>
  );
}
