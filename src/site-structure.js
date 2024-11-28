import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import DirectionsBikeRoundedIcon from '@mui/icons-material/DirectionsBikeRounded';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import SportsGymnasticsOutlinedIcon from '@mui/icons-material/SportsGymnasticsOutlined';

import heroImg from "images/index.jpg";
import about1Img from "images/a1.png";
import testimonialImg from "images/testimonials.jpg";

const homePage = {
	pageTitle: "Home",
	description: "Home",
	section: "Home",
	linkName: "Home",
	route: "/home",
};

const hero = {
	image: heroImg,
	overtitleIcon: faPlay,
	overtitle: "Guarda il video di presentazione",
	title: "In forma con noi",
	subtitle: "Pilates, Yoga, Fitness, Spinning e molto altro",
	cta: "Contattaci",
	boxes: [
		{
			icon: faUser,
			title: "Personal training",
			description: "Allenamento personalizzato dove un istruttore qualificato crea e supervisiona un programma di esercizi apposta per te",
		},
		{
			icon: faCalendarCheck,
			title: "Corsi di gruppo",
			description: "Lezioni di fitness di gruppo come yoga, pilates, spinning, zumba e aerobica. Un'esperienza sociale e motivante",
		},
		{
			icon: faUtensils,
			title: "Nutrizionista",
			description: "Consulenze nutrizionali per aiutare i clienti a creare piani alimentari equilibrati e sani, supportando gli obiettivi di fitness",
		},
	]
}

const about = {
	image: about1Img,
	overtitle: "benvenuto",
	titleLight: "Scopri",
	titleBold: "Freetime",
	subtitle: "Entra in un mondo dove la tua energia prende vita e i tuoi limiti svaniscono. Freetime non è solo una palestra, ma un'esperienza trasformativa che ridefinisce il concetto di fitness",
	description: "Crediamo che il vero cambiamento inizi dalla passione. Per questo, in Freetime, non troverai solo attrezzi e pesi, ma un team di coach entusiasti e ispiratori pronti a spingerti oltre ogni limite. Ogni programma è pensato per accendere la scintilla che è in te, trasformando l'allenamento in un'avventura emozionante",
	cta: "Contattaci",
}

const testimonials = {
	image: testimonialImg,
	overtitle: "dicono di noi",
	title: "Testimonianze",
	ratingIcon: faStar,
	reviews: [
		{
			name: "Nunziella Cammi",
			date: "01/01/2024",
			text: "Una palestra con personale accogliente, empatico e competente allo stesso tempo, adatta a tutte le età... insomma ti fanno sentire a tuo agio!",
			rating: 4,
		},
		{
			name: "Silvia Sisti",
			date: "01/11/2023",
			text: "Adoro pilates... mi piace Alice come istruttrice per spiega, usa i termini tecnici e fornisce consigli di lettura specifici! Palestra accogliente e personale sempre gentile!!!!",
			rating: 5,
		},
		{
			name: "Francesca Di Bella",
			date: "01/07/2022",
			text: "Spaziosa, pulita e luminosa. Gli spazi sono ben organizzati: vi sono numerosi attrezzi disposti in due sale e un’ampia sala corsi che propone esperienze motorie per tutti i gusti. E’ presente una sauna,Spogliatoi spaziosi, docce calde. Personale gentile e qualificato. Consigliatissimo.",
			rating: 3,
		},
	]
}

const services = {
	overtitle: "la nostra proposta",
	title: "Corsi",
	courses: [
		{
			icon: SelfImprovementOutlinedIcon,
			name: "Yoga",
			description: "Lezioni di yoga per aumentare flessibilità, forza e rilassamento mentale",
		},
		{
			icon: SportsGymnasticsOutlinedIcon,
			name: "Pilates",
			description: "Rafforza il core e migliora la postura attraverso esercizi a basso impatto",
		},
		{
			icon: DirectionsBikeRoundedIcon,
			name: "Spinning",
			description: "Allenamento cardio intenso su bici stazionaria, perfetto per bruciare calorie",
		},
		{
			icon: FlashOnOutlinedIcon,
			name: "HIIT",
			description: "Sessioni di allenamento intervallato ad alta intensità per massimizzare la perdita di grasso",
		},
		{
			icon: FitnessCenterOutlinedIcon,
			name: "Bootcamp",
			description: "Circuiti di esercizi che combinano forza e cardio per un allenamento completo",
		},
		{
			icon: DirectionsRunOutlinedIcon,
			name: "CrossFit",
			description: "Programmi di allenamento funzionale per aumentare forza e condizione fisica generale",
		},
	]
}

const footer = {
	inputPlaceholder: "Scrivi qui la tua email...",
	cta: "Vai",
}

const contacts = {
	phone: "333 44 55 66 7",
	phoneIcon: faPhone,
	email: "",
}

export { homePage, hero, about, testimonials, services, footer, contacts };
