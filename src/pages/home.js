import { useAppContext } from "@/components/AppContext"
import DriversInfo from "@/components/DriversInfo"
import Link from "@/components/Link"
import Page from "@/components/Page"
import Comments from "./comments"
import Table from "./table"
import TableClassement from "./table-classement"
const Home = () => {
  const {
    state: { session },
  } = useAppContext()

  return (
    <Page>
      <div className="h-full flex flex-wrap justify-between  ">
        <div className="flex grow flex-col items-center  md:w-96 bg-red-40">
          <div>
            <h1 className="text-4xl font-bold py-3">Course precidante</h1>
            <Link href="/page3">page3</Link>
            <Link href="/users/user-patch">password</Link>
          </div>
          <div className="flex flex-wrap justify-center bg-red-30 gap-5 ">
            <iframe
              className="rounded-xl md:w-96"
              width=""
              height=""
              src="https://www.youtube.com/embed/3X0mA0Nn96Y"
              title="Le film de la course - GP du Japon"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="flex flex-col items-center bg-slate-20 ">
              <h1 className="text-3xl font-bold">classement</h1>
              <TableClassement />
            </div>
          </div>
          <div className="flex">
            <div className="bg-red-30 w-[10%]"> hellohello hellohello</div>
            <div>
              <h1 className="font-bold text-2xl py-2">lecture de la course!</h1>
              <div className="p-3 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, tenetur eaque vitae amet quis quidem tempora eos atque,
                  deleniti adipisci possimus dicta omnis. Fuga, laboriosam
                  numquam magni maiores molestias facere. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nihil, tenetur eaque vitae
                  amet quis quidem tempora eos atque, deleniti adipisci possimus
                  dicta omnis. Fuga, laboriosam numquam magni maiores molestias
                  facere. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nihil, tenetur eaque vitae amet quis quidem tempora eos
                  atque, deleniti adipisci possimus dicta omnis. Fuga,
                  laboriosam numquam magni maiores molestias facere. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Nihil, tenetur
                  eaque vitae amet quis quidem tempora eos atque, deleniti
                  adipisci possimus dicta omnis. Fuga, laboriosam numquam magni
                  maiores molestias facere. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nihil, tenetur eaque vitae amet
                  quis quidem tempora eos atque, deleniti adipisci possimus
                  dicta omnis. Fuga, laboriosam numquam magni maiores molestias
                  facere. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nihil, tenetur eaque vitae amet quis quidem tempora eos
                  atque, deleniti adipisci possimus dicta omnis. Fuga,
                  laboriosam numquam magni maiores molestias facere. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Nihil, tenetur
                  eaque vitae amet quis quidem tempora eos atque, deleniti
                  adipisci possimus dicta omnis. Fuga, laboriosam numquam magni
                  maiores molestias facere. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nihil, tenetur eaque vitae amet
                  quis quidem tempora eos atque, deleniti adipisci possimus
                  dicta omnis. Fuga, laboriosam numquam magni maiores molestias
                  facere. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nihil, tenetur eaque vitae amet quis quidem tempora eos
                  atque, deleniti adipisci possimus dicta omnis. Fuga,
                  laboriosam numquam magni maiores molestias facere.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-between  items-center  w-full md:w-auto bg-slate-30  ">
          <div>
            <h1 className="text-3xl font-bold pt-10">Top 5 drivers</h1>
            {session && <DriversInfo />}
            <Table />
          </div>
          <div className="">{session && <Comments />}</div>
        </div>
      </div>
    </Page>
  )
}
export default Home
