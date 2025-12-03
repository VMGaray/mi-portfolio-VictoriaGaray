'use client';

export default function ProjectVideos() {
  const videos = [
    {
      id: 1,
      title: "📰 Impacto Notas de Prensa - ICC Group",
      description: "Sistema automatizado de análisis de medios con IA",
      videoUrl: "/images/20251203-impacto-notas-prensa.vercel.app-iphone8.webm",
      projectLink: "https://impacto-notas-prensa.vercel.app/",
    },
    {
      id: 2,
      title: "💎 Magnolia Joyas - E-commerce",
      description: "Plataforma full-stack para joyería online",
      videoUrl: "/images/20251203-ecommers1.webm",
      projectLink: "https://github.com/VMGaray/magnolia_joyas.git",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-950 mb-4">
          🎥 Proyectos en Acción
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Mira mis proyectos funcionando en tiempo real
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-purple-100"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-gray-900 overflow-hidden group">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  poster={video.videoUrl.replace('.webm', '.jpg')}
                >
                  <source src={video.videoUrl} type="video/webm" />
                  Tu navegador no soporta la reproducción de videos.
                </video>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Info Container */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{color: '#7E4FB0'}}>
                  {video.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {video.description}
                </p>

                {video.projectLink && (
                  <a
                    href={video.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{backgroundColor: '#7E4FB0'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6d3f96'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7E4FB0'}
                  >
                    <span>Ver Proyecto</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
