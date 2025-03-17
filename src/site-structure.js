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
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";

import heroImg from "images/index.jpg";
import heroVid from "video/12_06.mp4";
import about1Img from "images/a1.png";
import about2Img from "images/a2.png";
import teamImg from "images/team.jpg";
import testimonialImg from "images/testimonials__bg.png";
import aboutPageImg from "images/about_page.jpg";
import servicesPageImg from "images/services.jpg";
import galleryPageImg from "images/gallery.jpg";
import contactsPageImg from "images/contact.jpg";
import skillsImg from "images/skills.jpg";
import coursesImg from "images/courses.jpg";

import team1 from "images/team/258.jpg";
import team2 from "images/team/137.jpg";
import team3 from "images/team/152.jpg";
import team4 from "images/team/186.jpg";
import team5 from "images/team/243.jpg";
import team6 from "images/team/164.jpg";
import team7 from "images/team/175.jpg";
import team8 from "images/team/120.jpg";
import team9 from "images/team/249.jpg";
import team10 from "images/team/268.jpg";
import team11 from "images/team/287.jpg";
import team12 from "images/team/301.jpg";
import team13 from "images/team/307.jpg";
import team14 from "images/team/324.jpg";
import team15 from "images/team/397.jpg";
import team16 from "images/team/371.jpg";
import team17 from "images/team/361.jpg";
import team18 from "images/team/357.jpg";
import team19 from "images/team/283.jpg";
import team20 from "images/team/348.jpg";
import team21 from "images/team/383.jpg";
import team22 from "images/team/022.jpg";
import team23 from "images/team/052.jpg";
import team24 from "images/team/042.jpg";
import team25 from "images/team/004.jpg";
import team26 from "images/team/069.jpg";

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

import pdfSanFiorano from "pdf/planning_san_fiorano.pdf";
import pdfSomaglia from "pdf/planning_somaglia.pdf";

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
	heroImg: galleryPageImg,
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
				"Macchinari Technogym di ultima generazione e schede personalizzate per un allenamento a 360°",
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
		{ name: "Angelo", job: "Direttore tecnico", image: team1 },
		{ name: "Matteo", job: "Istruttore e personal trainer", image: team2 },
		{ name: "Flavio", job: "Istruttore e personal trainer", image: team3 },
		{ name: "Lorenzo", job: "Istruttore e personal trainer", image: team4 },
		{ name: "Daniel", job: "Istruttore e personal trainer", image: team5 },
		{ name: "Daniele", job: "Istruttore e personal trainer", image: team6 },
		{ name: "Luca", job: "Istruttore e personal trainer", image: team7 },
		{ name: "Gabriele", job: "Istruttore e personal trainer", image: team8 },
		{ name: "Simone", job: "Istruttore e personal trainer", image: team9 },
		{ name: "Max", job: "Istruttore corsi e personal trainer", image: team10 },
		{ name: "Vanessa", job: "Istruttrice corsi", image: team11 },
		{ name: "Clara", job: "Istruttrice corsi", image: team12 },
		{ name: "Jessica", job: "Istruttrice corsi", image: team13 },
		{ name: "Alice", job: "Istruttrice corsi", image: team14 },
		{ name: "Benedetta", job: "Istruttrice Pancafit", image: team15 },
		{ name: "Aldo", job: "Istruttore Spinning", image: team16 },
		{ name: "Carlotta", job: "Istruttrice Spinning", image: team17 },
		{ name: "Francesco", job: "Istruttore Spinning", image: team18 },
		{ name: "Gianluca", job: "Istruttore Kick Boxing", image: team19 },
		{ name: "Marco e Chiara", job: "Istruttori balli latini", image: team20 },
		{ name: "Ginevra", job: "Massoterapista", image: team21 },
		{ name: "Riccardo", job: "Addetto alle iscrizioni", image: team22 },
		{ name: "Maria", job: "Addetta alle iscrizioni", image: team23 },
		{ name: "Nicolò", job: "Addetto alle iscrizioni", image: team24 },
		{ name: "Stefania", job: "Addetta all'accoglienza", image: team25 },
		{ name: "Linda", job: "Addetta all'accoglienza", image: team26 },
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
		{ name: "Benessere", percentage: 100 },
		{ name: "Energia", percentage: 100 },
		{ name: "Noia", percentage: 0 },
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
					description:
						"Macchinari Technogym di ultima generazione sia isotonici che a carico libero",
				},
				{
					icon: DescriptionIcon,
					name: "Schede allenamento",
					description: "Personalizzate e comprese nel tuo abbonamento",
				},
				{
					icon: GroupsIcon,
					name: "Assistenza di sala",
					description:
						"Un istruttore qualificato è sempre presente e disponibile in sala pesi per garantirti un allenamento sicuro",
				},
			],
		},
		{
			"Servizi integrativi": [
				{
					icon: PeopleIcon,
					name: "Personal training",
					description:
						"Servizio di allenamento individuale e personalizzato con un istruttore qualificato, per raggiungere i tuoi obiettivi",
				},
				{
					icon: AirlineSeatFlatIcon,
					name: "Massaggi sportivi",
					description:
						"Post allenamento potrai concederti una coccola decontratturante e rigenerante",
				},
				{
					icon: RestaurantMenuIcon,
					name: "Nutrizionista",
					description:
						"E' più facile raggiungere il tuo obiettivo di benessere abbinando all'allenamento un piano alimentare preparato dal nostro biologo nutrizionista",
				},
			],
		},
		{
			"Corsi di gruppo": [
				{
					icon: FitnessCenterOutlinedIcon,
					name: "Tonificazione",
					description:
						"Migliora la tonicità del tuo corpo con l'utilizzo di piccoli attrezzi",
				},
				{
					icon: MusicNoteIcon,
					name: "Coreografia",
					description:
						"Coordinazione e divertimento a ritmo di musica, a corpo libero o con lo step",
				},
				{
					icon: SportsHandballIcon,
					name: "Functional training",
					description:
						"Utilizzando il corpo come sovraccarico ne miglioriamo le funzionalità attraverso esercizi con attrezzi specifici",
				},
				{
					icon: SelfImprovementOutlinedIcon,
					name: "Yoga",
					description:
						"Migliora forza e flessibilità attraverso l'unione di movimento, respiro e meditazione",
				},
				{
					icon: SportsGymnasticsOutlinedIcon,
					name: "Pilates",
					description:
						"Metodo di allenamento focalizzato sul rinforzo del core e sul miglioramento della flessibilità ed equilibrio",
				},
				{
					icon: ManIcon,
					name: "Posturale",
					description:
						"Esercizi mirati per correggere e migliorare la postura uniti ad esercizi specifici per l'allungamento muscolare",
				},
				{
					icon: SelfImprovementOutlinedIcon,
					name: "PancaFit",
					description:
						"Libertà e benessere a tutto il corpo attraverso l'allungamento muscolare globale decompensato fatto in postura corretta",
				},
				{
					icon: DirectionsBikeRoundedIcon,
					name: "Spinning",
					description:
						"Attività aerobica su bici svolta a ritmo di musica e ad intervalli di velocità per allenare la resistenza cardiovascolare",
				},
				{
					icon: SportsMmaIcon,
					name: "Kickboxing",
					description:
						"Sport da combattimento che combina tecniche di calcio delle arti marziali a colpi di pugno del pugilato",
				},
				{
					icon: EmojiPeopleIcon,
					name: "Balli latini",
					description:
						"I nostri istruttori di salsa e bachata ti porteranno alla scoperta delle danze caraibiche: una miscela esplosiva di sensualità, ritmo e allegria",
				},
				{
					icon: EscalatorWarningIcon,
					name: "Corsi bambini",
					description:
						"Proponiamo attività per bambini a partire dai 3 anni di età sempre proposte sotto forma di gioco",
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
			doc: pdfSanFiorano,
		},
		{
			name: "Somaglia",
			address: "via Autostrada del sole 4, 26867 Somaglia (LO)",
			link:
				"https://www.google.com/maps/embed/v1/place?q=via+Autostrada+del+sole+4,+26867+Somaglia+(LO)&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
			doc: pdfSomaglia,
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
