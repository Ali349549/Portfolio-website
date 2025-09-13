import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });  


    const serviceID = "service_i2msk7d";
    const templateID = "template_gzjhq3d";
    const publicKey = "6Yml-eQOzTuEP9I26";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

    emailjs
        .sendForm(import.meta.env.VITE_serviceID, import.meta.env.VITE_templateID, e.target, import.meta.env.VITE_publicKey)
        .then((result) => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // Reset form fields
        })
        .catch(() => alert("An error occurred, please try again later."));
    };

    return (
        <section id="Contact" className="min-h-screen flex items-center justify-center relative bg-gray-900 text-white">
            <RevealOnScroll>
                <div className="text-center px-4">
                    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                    <p className="text-lg mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <form className="max-w-md mx-auto space-y-4 "  onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name = "name"
                            placeholder="Your Name"
                            value = {formData.name}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            type="email"
                            name = "email"
                            placeholder="Your Email"
                            value = {formData.email}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <textarea
                            placeholder="Your Message"
                            name = "message"
                            value = {formData.message}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-teal-500 transition-all duration-300 text-white rounded"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>

    );
};
