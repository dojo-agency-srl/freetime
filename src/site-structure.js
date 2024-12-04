import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import DirectionsBikeRoundedIcon from "@mui/icons-material/DirectionsBikeRounded";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import SportsGymnasticsOutlinedIcon from "@mui/icons-material/SportsGymnasticsOutlined";

import heroImg from "images/index.jpg";
import about1Img from "images/a1.png";
import about2Img from "images/a2.png";
import teamImg from "images/team.jpg";
import testimonialImg from "images/testimonials.jpg";
import aboutPageImg from "images/about_page.jpg";
import servicesPageImg from "images/services.jpg";
import contactsPageImg from "images/contact.jpg";
import skillsImg from "images/skills.jpg";
import coursesImg from "images/courses.jpg";

import team1 from "images/team_1.jpg";
import team2 from "images/team_2.jpg";
import team3 from "images/team_3.jpg";

import gallery1 from "images/gallery/blog_7.jpg";
import gallery2 from "images/gallery/blog_4.jpg";
import gallery3 from "images/gallery/blog_11.jpg";
import gallery4 from "images/gallery/blog_12.jpg";
import gallery5 from "images/gallery/blog_5.jpg";
import gallery6 from "images/gallery/blog_6.jpg";
import gallery7 from "images/gallery/blog_1.jpg";
import gallery8 from "images/gallery/blog_8.jpg";
import gallery9 from "images/gallery/blog_9.jpg";
import gallery10 from "images/gallery/blog_10.jpg";
import gallery11 from "images/gallery/blog_3.jpg";
import gallery12 from "images/gallery/blog_2.jpg";

const homePage = {
	pageTitle: "Home",
	description: "Home",
	section: "Home",
	linkName: "Home",
	route: "/home",
};

const aboutPage = {
	pageTitle: "About us",
	description: "Pilates, Yoga, Fitness, Spinning & molto altro",
	section: "About",
	linkName: "About us",
	route: "/about-us",
	heroImg: aboutPageImg,
	aboutImg: about2Img,
};

const servicesPage = {
	pageTitle: "Corsi e servizi",
	description: "Dai uno sguardo alle discipline che proponiamo",
	section: "Servizi",
	linkName: "Servizi",
	route: "/servizi",
	heroImg: servicesPageImg,
};

const galleryPage = {
	pageTitle: "Gallery",
	description: "Una collezione dei momenti che puoi vivere con noi",
	section: "Gallery",
	linkName: "Gallery",
	route: "/gallery",
	heroImg: servicesPageImg,
};

const contactsPage = {
	pageTitle: "Contatti",
	description: "Per non perderci mai di vista",
	section: "Contatti",
	linkName: "Contatti",
	route: "/contatti",
	heroImg: contactsPageImg,
	title: "Compila il form per scriverci",
	description:
		"Lezioni di yoga per aumentare flessibilità, forza e rilassamento mentale.",
	form: {
		fields: [
			{
				placeholder: "Nome e Cognome",
				errorMessage: "Il nome è obbligatorio",
				length: 5,
			},
			{
				placeholder: "Scrivi qui il messaggio",
			},
		],
		cta: "Invia",
	},
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
			description:
				"Allenamento personalizzato dove un istruttore qualificato crea e supervisiona un programma di esercizi apposta per te",
		},
		{
			icon: faCalendarCheck,
			title: "Corsi di gruppo",
			description:
				"Lezioni di fitness di gruppo come yoga, pilates, spinning, zumba e aerobica. Un'esperienza sociale e motivante",
		},
		{
			icon: faUtensils,
			title: "Nutrizionista",
			description:
				"Consulenze nutrizionali per aiutare i clienti a creare piani alimentari equilibrati e sani, supportando gli obiettivi di fitness",
		},
	],
};

const about = {
	image: about1Img,
	overtitle: "benvenuto",
	titleLight: "Scopri",
	titleBold: "Freetime",
	subtitle:
		"Entra in un mondo dove la tua energia prende vita e i tuoi limiti svaniscono. Freetime non è solo una palestra, ma un'esperienza trasformativa che ridefinisce il concetto di fitness",
	description:
		"Crediamo che il vero cambiamento inizi dalla passione. Per questo, in Freetime, non troverai solo attrezzi e pesi, ma un team di coach entusiasti e ispiratori pronti a spingerti oltre ogni limite. Ogni programma è pensato per accendere la scintilla che è in te, trasformando l'allenamento in un'avventura emozionante",
	cta: "Scopri di più",
};

const team = {
	image: teamImg,
	overtitle: "garanzia di professionalità",
	title: "Il team",
	members: [
		{ name: "Alessandro Zibbra", job: "Content strategist", image: team3 },
		{ name: "Debora Degradi", job: "Content strategist", image: team2 },
		{ name: "Paolo Bassini", job: "Web designer", image: team1 },
	],
};

const skills = {
	image: skillsImg,
	overtitle: "la nostra filosofia",
	title: "We love sports",
	description:
		"Da Freetime ogni allenamento è un trionfo, ogni sudore una medaglia, ogni giorno una nuova sfida vinta. Non importa da dove parti, conta dove vuoi arrivare. Lasciati ispirare, lascia che la tua energia prenda il volo. Vieni a scoprire il luogo dove il fitness incontra la passione. Benvenuto in Freetime, dove la tua forza interiore trova la sua vera espressione",
	skills: [
		{ name: "Fitness", percentage: 100 },
		{ name: "Pilates", percentage: 70 },
		{ name: "Yoga", percentage: 60 },
	],
};

const testimonials = {
	image: testimonialImg,
	overtitle: "dicono di noi",
	title: "Testimonianze",
	ratingIcon: faStar,
	reviews: [
		{
			name: "Nunziella Cammi",
			date: "01/01/2024",
			text:
				"Una palestra con personale accogliente, empatico e competente allo stesso tempo, adatta a tutte le età... insomma ti fanno sentire a tuo agio!",
			rating: 4,
		},
		{
			name: "Silvia Sisti",
			date: "01/11/2023",
			text:
				"Adoro pilates... mi piace Alice come istruttrice per spiega, usa i termini tecnici e fornisce consigli di lettura specifici! Palestra accogliente e personale sempre gentile!!!!",
			rating: 5,
		},
		{
			name: "Francesca Di Bella",
			date: "01/07/2022",
			text:
				"Spaziosa, pulita e luminosa. Gli spazi sono ben organizzati: vi sono numerosi attrezzi disposti in due sale e un’ampia sala corsi che propone esperienze motorie per tutti i gusti. E’ presente una sauna,Spogliatoi spaziosi, docce calde. Personale gentile e qualificato. Consigliatissimo.",
			rating: 3,
		},
	],
};

const services = {
	overtitle: "la nostra proposta",
	title: "Corsi e servizi",
	courses: [
		{
			icon: SelfImprovementOutlinedIcon,
			name: "Yoga",
			description:
				"Lezioni di yoga per aumentare flessibilità, forza e rilassamento mentale",
		},
		{
			icon: SportsGymnasticsOutlinedIcon,
			name: "Pilates",
			description:
				"Rafforza il core e migliora la postura attraverso esercizi a basso impatto",
		},
		{
			icon: DirectionsBikeRoundedIcon,
			name: "Spinning",
			description:
				"Allenamento cardio intenso su bici stazionaria, perfetto per bruciare calorie",
		},
		{
			icon: FlashOnOutlinedIcon,
			name: "HIIT",
			description:
				"Sessioni di allenamento intervallato ad alta intensità per massimizzare la perdita di grasso",
		},
		{
			icon: FitnessCenterOutlinedIcon,
			name: "Bootcamp",
			description:
				"Circuiti di esercizi che combinano forza e cardio per un allenamento completo",
		},
		{
			icon: DirectionsRunOutlinedIcon,
			name: "CrossFit",
			description:
				"Programmi di allenamento funzionale per aumentare forza e condizione fisica generale",
		},
	],
};

const coursesProgram = {
	coursesImg: coursesImg,
	overtitle: "non perdere un allenamento",
	title: "Programma dei corsi",
	description:
		"Scarica il programma dei corsi per la sede di tuo interesse, puoi scegliere tra Somaglia o San Fiorano",
	locations: [
		{
			name: "San Fiorano",
			address: "via Milano 11, 26848 San Fiorano (LO)",
			link:
				"https://www.google.com/maps/embed/v1/place?q=via+Milano+11,+26848+San+Fiorano+(LO)&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
		},
		{
			name: "Somaglia",
			address: "via Prova 19, 26844 Somaglia (LO)",
			link:
				"https://www.google.com/maps/embed/v1/place?q=via+Milano+11,+26848+San+Fiorano+(LO)&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
		},
	],
};

const gallery = {
	images: [
		{
			source: gallery1,
			alt: "Freetime Fitness",
		},
		{
			source: gallery2,
			alt: "Freetime Fitness",
		},
		{
			source: gallery3,
			alt: "Freetime Fitness",
		},
		{
			source: gallery4,
			alt: "Freetime Fitness",
		},
		{
			source: gallery5,
			alt: "Freetime Fitness",
		},
		{
			source: gallery6,
			alt: "Freetime Fitness",
		},
		{
			source: gallery7,
			alt: "Freetime Fitness",
		},
		{
			source: gallery8,
			alt: "Freetime Fitness",
		},
		{
			source: gallery9,
			alt: "Freetime Fitness",
		},
		{
			source: gallery10,
			alt: "Freetime Fitness",
		},
		{
			source: gallery11,
			alt: "Freetime Fitness",
		},
		{
			source: gallery12,
			alt: "Freetime Fitness",
		},
	],
};

const footer = {
	inputPlaceholder: "Scrivi qui la tua email...",
	cta: "Iscriviti",
};

const contacts = {
	phone: "333 44 55 66 7",
	phoneLabel: "Tel.",
	phoneIcon: faPhone,
	email: "info@freetime.fitness",
	emailLabel: "E-mail",
};

export {
	homePage,
	aboutPage,
	servicesPage,
	galleryPage,
	contactsPage,
	hero,
	about,
	team,
	skills,
	testimonials,
	services,
	coursesProgram,
	gallery,
	footer,
	contacts,
};
