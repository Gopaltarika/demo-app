import Mymap from "@/components/MyMap"
const page = () => {
  return (
    <div>
      <h1 className="text-center">Hello world</h1>
      <Mymap />
      <div className="flex gap-5 pl-6 pt-10">
        <h2>routing :-</h2>
        <a href="/about">about</a>
      </div>
    </div>
  )
}
export default page