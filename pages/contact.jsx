import { Wrapper } from "@googlemaps/react-wrapper";

const gridItems = [{ name: 'Masz ofertę współpracy?', bg: '', desc: 'Skontakuj się z nami przez e-mail!' }, 
{ name: 'img', bg: 'bg-yellow-600', desc: '' }, 
{ name: 'map', bg: 'bg-slate-600', desc: '' }, 
{ name: 'Gdzie nas znaleźć?', bg: '', desc: '👈 sprawdź naszą lokalizację tutaj' }];

export default function Contact() {
    return (
        <>
            <div className="h-64 text-center bg-red-600"><h1 className="text-6xl font-bold pt-24 text-slate-100">Kontakt</h1></div>
            <div className="grid grid-cols-2 grid-rows-3 justify-center items-center text-center">
                {gridItems.map(item => (<div className={`h-96 pt-24 ${item.bg}`}>
                    <h1 className="text-2xl">{item.name}</h1>
                    <p>{item.desc}</p>
                </div>)
                )}
            </div>
        </>
    )
}