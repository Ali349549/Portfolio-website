import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="Projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-2">Bookstore Application</h3>
                            <p className="text-gray-400 mb-4">A bookstore application made using JavaFX. Showcases abilities to process external data and to showcase data with front end
                                and back end integration.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-2">Download Folder Automated Cleaner</h3>
                            <p className="text-gray-400 mb-4">A Python script that automatically cleans and organizes the download folder. Used on a personal level to clean my own downloads folder.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}