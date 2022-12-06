import Page from "@/components/Page"

const LastRace = () => {
  return (
    <Page>
      <div>
        <section className="overflow-auto grow">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="text-4xl font-bold py-3">Course precidante</h1>
            </div>
            <div>
              <iframe
                className="rounded-xl"
                width=""
                height=""
                src="https://www.youtube.com/embed/3X0mA0Nn96Y"
                title="Le film de la course - GP du Japon"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="m-5 ">
              <h1 className="font-bold text-2xl">lecture de la course!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                tenetur eaque vitae amet quis quidem tempora eos atque, deleniti
                adipisci possimus dicta omnis. Fuga, laboriosam numquam magni
                maiores molestias facere.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                tenetur eaque vitae amet quis quidem tempora eos atque, deleniti
                adipisci possimus dicta omnis. Fuga, laboriosam numquam magni
                maiores molestias facere.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                tenetur eaque vitae amet quis quidem tempora eos atque, deleniti
                adipisci possimus dicta omnis. Fuga, laboriosam numquam magni
                maiores molestias facere.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                tenetur eaque vitae amet quis quidem tempora eos atque, deleniti
                adipisci possimus dicta omnis. Fuga, laboriosam numquam magni
                maiores molestias facere.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}
export default LastRace
