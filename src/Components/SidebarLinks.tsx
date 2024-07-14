const SidebarLinks = (props:{}) => {
  return (
    <div className="relative p-2 bg-graybtn mt-3 rounded-2xl">
        <div className="py-5 px-3 flex gap-3 items-center">
            <img src="https://bellissimo.uz/images/menu-icon.svg" alt="" />
            <p className="text-sm font-light">Menu</p>
        </div>
        <div className="absolute w-[85%] right-0" id="s1QvSmGpRS7hxnjjfLvCkeDmy3MprJkpWBe"></div>
        <div className="py-5 px-3 flex gap-3 items-center">
            <img src="https://bellissimo.uz/images/restaurant-icon.svg" alt="" />
            <p className="text-sm font-light">Restoranlar</p>
        </div>
    </div>
  )
}

export default SidebarLinks