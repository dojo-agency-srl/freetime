import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import DirectionsBikeRoundedIcon from "@mui/icons-material/DirectionsBikeRounded";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import SportsGymnasticsOutlinedIcon from "@mui/icons-material/SportsGymnasticsOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DescriptionIcon from "@mui/icons-material/Description";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import ManIcon from "@mui/icons-material/Man";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";

import heroImg from "images/index.jpg";
import heroVid from "video/12_06.mp4";
import about1Img from "images/a1.png";
import about2Img from "images/a2.png";
import teamImg from "images/team.jpg";
import testimonialImg from "images/testimonials__bg.png";
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
	description: "Tutto quello che c'è da sapere su Freetime",
	section: "About",
	linkName: "About us",
	route: "/about-us",
	heroImg: aboutPageImg,
	aboutImg: about2Img,
};

const servicesPage = {
	pageTitle: "Servizi",
	description: "Dai uno sguardo alle attività che proponiamo",
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
	description:
		"Per informazioni compila il form con i tuoi dati e verrai ricontattato al più presto",
	section: "Contatti",
	linkName: "Contatti",
	route: "/contatti",
	heroImg: contactsPageImg,
	title: "Compila il form per scriverci",
	description2: "Enjoy your body",
	form: {
		fields: [
			{
				placeholder: "Nome e Cognome",
				errorMessage: "Il nome è obbligatorio",
				length: 5,
			},
			{
				placeholder: "Numero di telefono",
				errorMessage: "Il numero di telefono è obbligatorio",
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
	video: heroVid,
	overtitleIcon: faPlay,
	overtitle: "Guarda il video di presentazione",
	title: "In forma con noi",
	subtitle: "Ci prendiamo cura del tuo benessere",
	cta: "Contattaci",
	boxes: [
		{
			icon: PeopleOutlineIcon,
			title: "Personal training",
			description:
				"Allenamento personalizzato con un istruttore qualificato per raggiungere i tuoi obiettivi",
		},
		{
			icon: FitnessCenterIcon,
			title: "Sala Fitness",
			description:
				"Macchinari TechnoGym di ultima generazione e schede personalizzate per un allenamento a 360°",
		},
		{
			icon: EventAvailableIcon,
			title: "Corsi di gruppo",
			description:
				"La soluzione perfetta per rendere i tuoi allenamenti più coinvolgenti e divertenti",
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
		"Crediamo che il vero cambiamento inizi dalla passione. Per questo, in Freetime, non troverai solo attrezzature, ma un team di coach entusiasti e ispiratori pronti a spingerti oltre ogni limite. Ogni programma è pensato per accendere la scintilla che è in te, trasformando l'allenamento in un'avventura emozionante",
	cta: "Scopri di più",
};

const team = {
	image: teamImg,
	overtitle: "garanzia di professionalità",
	title: "Il team",
	members: [
		{ name: "Alessandro", job: "Content strategist", image: team3 },
		{ name: "Debora", job: "Content strategist", image: team2 },
		{ name: "Paolo", job: "Web designer", image: team1 },
		{ name: "Altro", job: "Web designer 2", image: team1 },
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
			name: "Gabriele B.",
			date: "01/01/2024",
			text:
				"Vengo in questa palestra da anni. Staff di ragazzi bravissimi e preparati. Ambiente armonioso. Pulizia top. Voto 10.",
			rating: 5,
		},
		{
			name: "Rossella 63",
			date: "01/11/2023",
			text:
				"Un mix perfetto di competenza professionale degli istruttori, cordialità, disponibilità.",
			rating: 5,
		},
		{
			name: "Francesca Di Bella",
			date: "01/07/2022",
			text:
				"Istruttori e personal trainer sempre disponibili e professionali, sala pesi top. Posto famigliare, ti mette di buon umore.",
			rating: 5,
		},
	],
};

const services = {
	overtitle: "la nostra proposta",
	title: "Corsi e servizi",
	courses: [
		{
			"Sala fitness": [
				{
					icon: FitnessCenterOutlinedIcon,
					name: "Attrezzature",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: DescriptionIcon,
					name: "Schede allenamento",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: GroupsIcon,
					name: "Assistenza di sala",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
			],
		},
		{
			"Servizi integrativi": [
				{
					icon: PeopleIcon,
					name: "Personal training",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: SportsGymnasticsOutlinedIcon,
					name: "Massaggi sportivi",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: RestaurantMenuIcon,
					name: "Nutrizionista",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
			],
		},
		{
			"Corsi di gruppo": [
				{
					icon: FitnessCenterOutlinedIcon,
					name: "Tonificazione",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: MusicNoteIcon,
					name: "Coreografia",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: SportsHandballIcon,
					name: "Functional training",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: SelfImprovementOutlinedIcon,
					name: "Yoga",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: SportsGymnasticsOutlinedIcon,
					name: "Pilates",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: ManIcon,
					name: "Posturale",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: SelfImprovementOutlinedIcon,
					name: "PancaFit",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: DirectionsBikeRoundedIcon,
					name: "Spinning",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: SportsMmaIcon,
					name: "Kickboxing",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: EmojiPeopleIcon,
					name: "Balli latini",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
				{
					icon: EscalatorWarningIcon,
					name: "Corsi bambini",
					description: "Lorem ipsum dolor sit amet, consectetur adepiscing elit",
				},
			],
		},
	],
};

const coursesProgram = {
	coursesImg: coursesImg,
	overtitle: "non perdere un allenamento",
	title: "Planning corsi",
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
			address: "via Autostrada del sole 4, 26867 Somaglia (LO)",
			link:
				"https://www.google.com/maps/embed/v1/place?q=via+Autostrada+del+sole+4,+26867+Somaglia+(LO)&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
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
	phone: "3938116582",
	phoneLabel: "Mobile (solo WhatsApp)",
	phoneIcon: faPhone,
	phone2: "037753493",
	phoneLabel2: "Fisso",
	phoneIcon2: faPhone,
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
