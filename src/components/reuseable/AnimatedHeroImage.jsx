
const AnimatedHeroImage = () => {
    return (
        <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-80 h-80 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-70 animate-ping"></div>
            <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center bg-[url(https://res.cloudinary.com/dtcbirvxc/image/upload/v1749818257/gif_2_yvkglz.gif)] object-center" style={{ backgroundPosition: "center" }}>


            </div>
        </div>
    )
}

export default AnimatedHeroImage