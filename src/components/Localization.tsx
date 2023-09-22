import './Maps.css'; // Importe o arquivo CSS

export default function Localization() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <div className="lg:text-center">
                        <h2 className="text-2xl font-bold text-gray-900">Localização</h2>
                    </div>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497.28563256177546!2d-38.029036!3d-4.357544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8f73b7cd7b859%3A0xfc2b75c4ac402f5b!2sYtaloTech!5e0!3m2!1spt-BR!2sbr!4v1695351597155!5m2!1spt-BR!2sbr" width="600" height="150" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
