import { TabView, TabPanel } from "primereact/tabview";
import { useState } from "react";
import { useProjectContext } from "../context/context";
const HomeContentTabs = () => {
	const { state } = useProjectContext();
	const { language } = state;
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeMobileIndex, setActiveMobileIndex] = useState(-1);

	const tabOneHeaderTemplate = () => (
		<>
			<div
				onClick={() => {
					activeMobileIndex !== 0
						? setActiveMobileIndex(0)
						: activeMobileIndex === 0 && setActiveMobileIndex(-1);
					setActiveIndex(0);
					// options.onClick();
				}}
				className="flex w-full text-sm xl:text-xl tracking-[6px] cursor-pointer gap-2 justify-end lg:justify-center items-center  hover:text-black hover:font-bold transform duration-500 ease-in"
			>
				<p
					className={`${
						activeIndex === 0 && activeMobileIndex === 0
							? "text-white font-bold lg:text-black"
							: "lg:text-gray-500 text-white"
					}`}
				>
					{language === "en" && `ABOUT `}
					{language === "pl" && (
						<div className="tracking-[3px]">O PRACOWNI</div>
					)}
					{language === "de" && (
						<div className="tracking-[3px] lg:tracking-[1px]">
							ÜBER DEN STUDIO
						</div>
					)}
				</p>
			</div>
			{activeMobileIndex === 0 && (
				<div className="flex my-10 mb-20 lg:hidden w-full text-sm lg:text-[0.7rem] xl:text-[0.8rem]  text-pretty text-left  xl:text-center font-sans">
					{language === "en" && (
						<>
							{" "}
							is an original design office managed by Mikołaj Świat - chief
							architect , graduate of the Gdańsk University of Technology and
							member of the Pomeranian Chamber of Architects of the Republic of
							Poland. The studio was created out of a family passion for design,
							grounded in many years of experience. Świat Architekt is based on
							the transparency of processes, understanding and adapting the
							project to the needs, while making the most effective use of the
							investor's budget. We are aware of the responsibility that
							designers have by influencing culture and development, which is
							why we approach each order carefully <br /> <br /> We create
							sustainable architecture, maintaining the appropriate balance
							between function, form, composition, and construction, regulatory
							and financial aspects. Our main task is to learn about the
							investor's needs, which, together with the analysis of the area
							being developed, are the basis for developing an accurate,
							coherent and attractive design idea for a given case. It is the
							basis for creating space, creating an unconventional place that
							highlights the character of its users. Our projects take full
							advantage of the potential of the area, while maintaining a
							relationship with the surroundings.
						</>
					)}

					{language === "pl" && (
						<>
							to autorskie biuro projektowe zarządzane przez Mikołaja Świat -
							głównego architekta, absolwenta Politechniki Gdańskiej oraz
							członka pomorskiej izby architektów RP. Pracownia powstała z
							rodzinnej pasji do projektowania, ugruntowanej w zebranym
							doświadczeniu. Świat Architekt opiera się na przejrzystości
							procesów, zrozumienia, oraz dostosowania projektu do potrzeb,
							równocześnie najefektywniej wykorzystując budżet inwestora.
							Jesteśmy świadomi odpowiedzialności jaka spoczywa na projektantach
							poprzez wpływ na kulturę i rozwój, dlatego rozważnie podchodzimy
							do każdego zlecenia <br /> <br /> Kreujemy zrównoważoną
							architekturę, utrzymując odpowiedni balans pomiędzy funkcją,
							formą, kompozycją, a konstrukcją, aspektami regulacyjnymi oraz
							finansowymi. Naszym głównym zadaniem jest poznanie potrzeb
							inwestora, które wspólnie z analizą opracowywanego terenu są
							podstawą do postawienia trafnej, spójnej i atrakcyjnej dla danego
							przypadku idei projektowej. Jest ona bazą do kreowania
							przestrzeni, tworząc niekonwencjonalne miejsce uwydatniające
							charakter użytkowników. Nasze projekty wykorzystują w pełni
							potencjał terenu, jednocześnie pozostając w relacji z otoczeniem.
						</>
					)}
					{language === "de" && (
						<>
							ist ein originelles Designbüro unter der Leitung von Mikołaj Świat
							– Chefarchitekt, Absolvent der Technischen Universität Danzig und
							Mitglied der Pommerschen Architektenkammer der Republik Polen. Das
							Studio entstand aus einer familiären Leidenschaft für Design, die
							auf langjähriger Erfahrung basiert. Świat Architekt basiert auf
							der Transparenz der Prozesse, dem Verständnis und der Anpassung
							des Projekts an die Bedürfnisse bei gleichzeitiger maximaler
							Nutzung des Budgets des Investors. Wir sind uns der Verantwortung
							bewusst, die Designer bei der Beeinflussung von Kultur und
							Entwicklung tragen, weshalb wir jeden Auftrag sorgfältig angehen{" "}
							<br />
							<br />
							Wir schaffen nachhaltige Architektur und achten dabei auf die
							richtige Balance zwischen Funktion, Form, Komposition sowie
							baulichen, regulatorischen und finanziellen Aspekten. Unsere
							Hauptaufgabe besteht darin, die Bedürfnisse des Investors
							kennenzulernen, die zusammen mit der Analyse des zu entwickelnden
							Gebiets die Grundlage für die Entwicklung einer genauen,
							kohärenten und attraktiven Designidee für einen bestimmten Fall
							bilden. Es ist die Grundlage für die Schaffung von Raum, die
							Schaffung eines unkonventionellen Ortes, der den Charakter seiner
							Nutzer hervorhebt. Unsere Projekte nutzen das Potenzial des
							Gebiets voll aus und pflegen gleichzeitig eine Beziehung zur
							Umgebung.
						</>
					)}
				</div>
			)}
		</>
	);

	const tabTwoHeaderTemplate = () => (
		<>
			<div
				// onClick={options.onClick}
				onClick={() => {
					activeMobileIndex !== 1
						? setActiveMobileIndex(1)
						: activeMobileIndex === 1 && setActiveMobileIndex(-1);

					setActiveIndex(1);
					// options.onClick();
				}}
				className="flex cursor-pointer text-sm xl:text-xl  tracking-[2px] xl:tracking-[6px]  gap-2 justify-end lg:justify-center items-center  hover:text-black hover:font-semibold transform duration-500 ease-in  "
			>
				<p
					className={`${
						activeIndex === 1
							? "text-white font-bold lg:text-black"
							: "lg:text-gray-500 text-white"
					}`}
				>
					{language === "en" && `PROCESS`}
					{language === "pl" && `PROCES`}
					{language === "de" && `VERFAHREN`}
				</p>
			</div>
			{activeMobileIndex === 1 && (
				<div className="flex my-10 lg:hidden w-full text-sm lg:text-[0.7rem] xl:text-[0.8rem]  text-pretty text-left  xl:text-center font-sans">
					{language === "en" && (
						<>
							The entire process is based on an interview regarding the
							investor's needs and preferences, preceded by a detailed field
							analysis and legal conditions of the developed area. For this
							purpose, we use GIS software and aerial photos, which allows us to
							predict and eliminate all threats to the planned investment. After
							determining the final version of the concept, we start preparing
							the project for the needs of administrative procedures and
							construction processes.
							<br /> <br /> We work using BIM software - it is parametric
							software that allows the preparation of documentation from the
							initial stages in 3D technology. Despite better inter-industry
							coordination, the mentioned technology allows us, among other
							things, to provide a 3D design model for independent viewing by
							the client via an online browser. In addition, we try to make the
							entire process as transparent as possible for each party, which is
							why we provide constant access to tracking the details of the work
							progress via the monday.com platform. For each client, after
							finalizing the concept, we provide a mock-up of the final design
							in the form of a 3D print.
						</>
					)}
					{language === "pl" && (
						<>
							Cały proces oparty jest na wywiadzie dotyczącym potrzeb i upodobań
							inwestora, poprzedzonym szczegółową analizą terenową oraz
							uwarunkowań prawnych opracowywanego terenu. W tym celu
							wykorzystujemy oprogramowanie GIS oraz zdjęcia z powietrza, co
							pozwala nam przewidzieć i wyeliminować wszystkie zagrożenia dla
							planowanej inwestycji. Po ustaleniu finalnej wersji koncepcji,
							przystępujemy do przygotowania projektu na potrzeby procedur
							administracyjnych oraz procesów budowlanych. <br /> <br />{" "}
							Pracujemy wykorzystując oprogramowanie BIM - jest to
							oprogramowanie parametryczne pozwalające na sporządzanie
							dokumentacji od początkowych faz w technologii 3D. Pomimo lepszej
							koordynacji międzybranżowej, wspomniana technologia pozwala nam
							między innymi udostępniać model projektu 3D do samodzielnego
							wglądu klientowi poprzez przeglądarkę online. Ponadto staramy się,
							aby cały proces był jak najbardziej przejrzysty dla każdej ze
							stron, dlatego zapewniamy stały dostęp do śledzenia szczegółów
							postępu prac poprzez platformę monday.com. Dla każdego klienta po
							sfinalizowaniu koncepcji dostarczamy makietę finalnego projektu w
							postaci wydruku 3D.
						</>
					)}

					{language === "de" && (
						<>
							Der gesamte Prozess basiert auf einem Gespräch über die
							Bedürfnisse und Vorlieben des Investors, dem eine detaillierte
							Feldanalyse und rechtliche Bedingungen des entwickelten Gebiets
							vorausgehen. Zu diesem Zweck verwenden wir GIS-Software und
							Luftbilder, die es uns ermöglichen, alle Bedrohungen für die
							geplante Investition vorherzusagen und zu beseitigen. Nachdem wir
							die endgültige Fassung des Konzepts festgelegt haben, beginnen wir
							mit der Vorbereitung des Projekts auf die Anforderungen der
							Verwaltungsabläufe und Bauprozesse. <br /> <br /> Wir arbeiten mit
							BIM-Software – einer parametrischen Software, die die Erstellung
							von Dokumentationen bereits in der Anfangsphase in 3D-Technologie
							ermöglicht. Trotz besserer branchenübergreifender Abstimmung
							ermöglicht uns die genannte Technologie unter anderem, ein
							3D-Entwurfsmodell zur unabhängigen Betrachtung durch den Kunden
							über einen Online-Browser bereitzustellen. Darüber hinaus
							versuchen wir, den gesamten Prozess für jede Partei so transparent
							wie möglich zu gestalten, weshalb wir über die Plattform
							monday.com einen ständigen Zugriff auf die Verfolgung der Details
							des Arbeitsfortschritts ermöglichen. Für jeden Kunden stellen wir
							nach der Finalisierung des Konzepts ein Mock-up des endgültigen
							Entwurfs in Form eines 3D-Drucks zur Verfügung.
						</>
					)}
				</div>
			)}
		</>
	);

	const tabThreeHeaderTemplate = () => (
		<>
			<div
				onClick={() => {
					activeMobileIndex !== 2
						? setActiveMobileIndex(2)
						: activeMobileIndex === 2 && setActiveMobileIndex(-1);

					setActiveIndex(2);
					// options.onClick();
				}}
				className="flex cursor-pointer text-sm xl:text-xl  tracking-[2px] xl:tracking-[6px]  gap-2 justify-end lg:justify-center items-center  hover:text-black hover:font-bold transform duration-500 ease-in "
			>
				<p
					className={`${
						activeIndex === 2
							? "text-white font-bold lg:text-black"
							: "lg:text-gray-500 text-white"
					}`}
				>
					{language === "en" && `OFFER`}
					{language === "pl" && `USŁUGI`}
					{language === "de" && `ANGEBOT`}
				</p>
			</div>
			{activeMobileIndex === 2 && (
				<div className="flex my-10 lg:hidden w-full text-sm lg:text-[0.7rem] xl:text-[0.8rem]  text-pretty text-left  xl:text-center font-sans">
					<p className={`${language === "pl" ? "hidden" : "block"}`}>
						Currently, we operate dynamically throughout Poland, offering
						comprehensive design services, starting from the concept through
						construction/execution design, carrying out administrative
						procedures, ending with supervision, including investor
						representation. We design diverse buildings and interiors that are
						an inseparable element of the facilities we develop, creating a
						coherent whole. We carry out various orders, i.e. audits of
						collections, answering the question of what the investor actually
						needs and how we can solve the problem using architectural
						solutions.
						<br />
						<br /> We also implement investment projects and cooperate with
						developers, offering comprehensive services from land absorption
						analyzes to advertising materials.Thanks to constant cooperation
						with industry specialists, we provide detailed, timely design
						documentation. Moreover, thanks to multi-discipline joint work from
						the beginning of the project, we are able to eliminate many
						coordination errors and cost-optimize our projects, which we
						perfectly prove in the executive documentation.
					</p>

					{language === "pl" && (
						<>
							Aktualnie prężnie działamy na terenie całej Polski oferując
							kompleksową obsługę projektową począwszy od koncepcji poprzez
							projekt budowlany/wykonawczy, przeprowadzenie procedur
							administracyjnych po nadzorowanie łącznie z zastępstwem
							inwestorskim. Projektujemy zróżnicowane budynki i wnętrza będące
							nierozłącznym elementem opracowywanych przez nas obiektów, tworząc
							spójną całość. Wykonujemy zróżnicowane zlecenia tj. audyty.zbiorów
							kolekcjonerskich, odpowiadając na pytanie czego potrzebuje de
							facto inwestor i w jaki sposób możemy rozwiązać problem za pomocą
							rozwiązań architektonicznych. Realizujemy również projekty
							inwestycyjne, współpracujemy z deweloperami proponując kompleksowe
							usługi od analiz chłonności terenu po materiały reklamowe. <br />
							<br /> Dzięki stałej współpracy ze specjalistami branżowymi
							zapewniamy szczegółową, terminowo wykonaną dokumentację
							projektową. Ponadto dzięki wielobranżowej wspólnej pracy od
							początku projektu jesteśmy w stanie wyeliminować wiele błędów
							koordynacyjnych i optymalizować kosztowo nasze projekty, co
							doskonale udowadniamy w dokumentacji wykonawczej.
						</>
					)}
				</div>
			)}
		</>
	);

	const tabFourHeaderTemplate = () => (
		<>
			<div
				onClick={() => {
					activeMobileIndex !== 3
						? setActiveMobileIndex(3)
						: activeMobileIndex === 3 && setActiveMobileIndex(-1);

					setActiveIndex(3);
					// options.onClick();
				}}
				className="flex text-sm xl:text-xl  tracking-[2px] xl:tracking-[6px] cursor-pointer justify-end lg:justify-center items-center  hover:text-black hover:font-bold transform duration-500 ease-in "
			>
				<p
					className={`${
						activeIndex === 3
							? "text-white font-bold lg:text-black"
							: "lg:text-gray-500 text-white"
					}`}
				>
					{" "}
					{language === "en" && `CONTACT`}
					{language === "pl" && `KONTAKT`}
					{language === "de" && `KONTAKT`}
				</p>
			</div>
			{activeMobileIndex === 3 && (
				<div className="block my-10 lg:hidden w-full text-sm lg:text-[0.7rem] xl:text-[0.8rem]  text-pretty text-left  xl:text-center font-sans">
					{language === "en" && (
						<p className="xl:text-lg mb-6">
							Working Hours: Every Working Day <br /> 9:00 - 19:00
						</p>
					)}
					{language === "pl" && (
						<p className="xl:text-lg mb-6">
							9-19 czas pracy: dni robocze
							<br /> 9:00 - 19:00
						</p>
					)}
					{language === "de" && (
						<p className="xl:text-lg mb-6">
							Arbeit Zeit : Arbeitstage <br /> 9:00 - 19:00
						</p>
					)}
					{/*                                                                                                                                                ail                                                                                                                                              info@swiatarchitekt.pl
					 */}
					<div className="text-left w-full flex flex-col justify-center gap-2 items-start  ">
						<div className="flex justify-between items-center  w-full">
							<p>Tel:</p>{" "}
							<a
								href="tel:+0048609860020"
								className=""
							>
								0048 609 860 020
							</a>
						</div>
						<div className="flex justify-between items-center  w-full">
							<p>Email: </p>
							<a
								href="mailto:info@swiatarchitekt.pl"
								className=" hover:font-bold transform-all duration-300 ease-in"
							>
								info@swiatarchitekt.pl
							</a>
						</div>
						{language === "en" && (
							<div className="flex justify-between items-center  w-full">
								<p>Address:</p>
								<>Poland • Gdynia • Redłowo</>{" "}
							</div>
						)}
						{language === "de" && (
							<div className="flex justify-between items-center  w-full">
								<p>Adres:</p>
								<p> Poland • Gdynia • Redłowo</p>{" "}
							</div>
						)}
						{language === "pl" && (
							<div className="flex justify-between items-center  w-full">
								<p>Adres:</p>
								<> Polska • Gdynia • Redłowo</>{" "}
							</div>
						)}

						<div className="mt-2 flex justify-between w-full gap-2">
							<a
								href="#"
								className=" flex gap-2 items-center group"
							>
								<i
									className="pi pi-linkedin text-white lg:text-gray-500 font-bold group-hover:text-black"
									style={{ fontSize: "1rem" }}
								></i>
								LinkedIn
							</a>
							<a
								href="#"
								className=" flex gap-2 items-center group"
							>
								<i
									className="pi pi-instagram text-white lg:text-gray-500 font-bold group-hover:text-black"
									style={{ fontSize: "1rem" }}
								></i>
								Instagram
							</a>
							<a
								href="#"
								className=" flex gap-2 items-center group"
							>
								<i
									className="pi pi-facebook text-white lg:text-gray-500 font-bold group-hover:text-black"
									style={{ fontSize: "1rem" }}
								></i>
								Facebook
							</a>
						</div>

						{language === "en" && (
							<div className="mt-4">
								We are able to conduct meetings in the office and online,
								including using virtual reality. To obtain more detailed
								information, including an approximate quote and deadline, please
								contact us by e-mail briefly regarding the construction project.
							</div>
						)}

						{language === "pl" && (
							<div className="mt-4">
								Spotkania jesteśmy w stanie zrealizować w biurze oraz online, w
								tym również korzystając z wirtualnej rzeczywistości. W celu
								uzyskania bardziej szczegółowych informacji w tym przybliżonej
								wyceny, terminu prosimy o kontakt.
							</div>
						)}

						{language === "de" && (
							<div className="mt-4">
								Wir sind in der Lage, Meetings im Büro und online durchzuführen,
								auch unter Einsatz von Virtual Reality. Für nähere
								Informationen, inklusive eines ungefähren Angebots und Termins,
								kontaktieren Sie uns bitte kurz per E-Mail zum Bauvorhaben.
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);

	return (
		<TabView
			activeIndex={activeIndex}
			onTabChange={(e) => setActiveIndex(e.index)}
			pt={{
				inkbar: { className: "hidden" },
				navContainer: {
					className: " order-first lg:order-last w-full flex justify-end ",
				},

				nav: {
					className:
						language !== "de"
							? "flex gap-3 lg:gap-0 flex-col w-full  justify-start  lg:justify-end lg:w-32 xl:w-48  items-end text-left "
							: "flex  gap-3 lg:gap-0 flex-col w-full justify-start  lg:justify-end lg:w-40 xl:w-64  items-end text-left pr-4",
				},
				root: {
					className:
						"flex flex-col w-full text-white pl-10 lg:px-0 lg:text-black gap-8  lg:gap-2 xl:gap-0  lg:flex-row justify-start items-center h-full",
				},
			}}
		>
			{/* ABOUT ME */}
			<TabPanel
				header="Header I"
				headerTemplate={tabOneHeaderTemplate}
			>
				<div className="hidden lg:flex w-full text-sm lg:text-[0.7rem] xl:text-[0.8rem]  text-pretty text-left  xl:text-center font-sans">
					{language === "en" && (
						<>
							{" "}
							is an original design office managed by Mikołaj Świat - chief
							architect , graduate of the Gdańsk University of Technology and
							member of the Pomeranian Chamber of Architects of the Republic of
							Poland. The studio was created out of a family passion for design,
							grounded in many years of experience. Świat Architekt is based on
							the transparency of processes, understanding and adapting the
							project to the needs, while making the most effective use of the
							investor's budget. We are aware of the responsibility that
							designers have by influencing culture and development, which is
							why we approach each order carefully <br /> <br /> We create
							sustainable architecture, maintaining the appropriate balance
							between function, form, composition, and construction, regulatory
							and financial aspects. Our main task is to learn about the
							investor's needs, which, together with the analysis of the area
							being developed, are the basis for developing an accurate,
							coherent and attractive design idea for a given case. It is the
							basis for creating space, creating an unconventional place that
							highlights the character of its users. Our projects take full
							advantage of the potential of the area, while maintaining a
							relationship with the surroundings.
						</>
					)}

					{language === "pl" && (
						<>
							to autorskie biuro projektowe zarządzane przez Mikołaja Świat -
							głównego architekta, absolwenta Politechniki Gdańskiej oraz
							członka pomorskiej izby architektów RP. Pracownia powstała z
							rodzinnej pasji do projektowania, ugruntowanej w zebranym
							doświadczeniu. Świat Architekt opiera się na przejrzystości
							procesów, zrozumienia, oraz dostosowania projektu do potrzeb,
							równocześnie najefektywniej wykorzystując budżet inwestora.
							Jesteśmy świadomi odpowiedzialności jaka spoczywa na projektantach
							poprzez wpływ na kulturę i rozwój, dlatego rozważnie podchodzimy
							do każdego zlecenia <br /> <br /> Kreujemy zrównoważoną
							architekturę, utrzymując odpowiedni balans pomiędzy funkcją,
							formą, kompozycją, a konstrukcją, aspektami regulacyjnymi oraz
							finansowymi. Naszym głównym zadaniem jest poznanie potrzeb
							inwestora, które wspólnie z analizą opracowywanego terenu są
							podstawą do postawienia trafnej, spójnej i atrakcyjnej dla danego
							przypadku idei projektowej. Jest ona bazą do kreowania
							przestrzeni, tworząc niekonwencjonalne miejsce uwydatniające
							charakter użytkowników. Nasze projekty wykorzystują w pełni
							potencjał terenu, jednocześnie pozostając w relacji z otoczeniem.
						</>
					)}
					{language === "de" && (
						<>
							ist ein originelles Designbüro unter der Leitung von Mikołaj Świat
							– Chefarchitekt, Absolvent der Technischen Universität Danzig und
							Mitglied der Pommerschen Architektenkammer der Republik Polen. Das
							Studio entstand aus einer familiären Leidenschaft für Design, die
							auf langjähriger Erfahrung basiert. Świat Architekt basiert auf
							der Transparenz der Prozesse, dem Verständnis und der Anpassung
							des Projekts an die Bedürfnisse bei gleichzeitiger maximaler
							Nutzung des Budgets des Investors. Wir sind uns der Verantwortung
							bewusst, die Designer bei der Beeinflussung von Kultur und
							Entwicklung tragen, weshalb wir jeden Auftrag sorgfältig angehen{" "}
							<br />
							<br />
							Wir schaffen nachhaltige Architektur und achten dabei auf die
							richtige Balance zwischen Funktion, Form, Komposition sowie
							baulichen, regulatorischen und finanziellen Aspekten. Unsere
							Hauptaufgabe besteht darin, die Bedürfnisse des Investors
							kennenzulernen, die zusammen mit der Analyse des zu entwickelnden
							Gebiets die Grundlage für die Entwicklung einer genauen,
							kohärenten und attraktiven Designidee für einen bestimmten Fall
							bilden. Es ist die Grundlage für die Schaffung von Raum, die
							Schaffung eines unkonventionellen Ortes, der den Charakter seiner
							Nutzer hervorhebt. Unsere Projekte nutzen das Potenzial des
							Gebiets voll aus und pflegen gleichzeitig eine Beziehung zur
							Umgebung.
						</>
					)}
				</div>
			</TabPanel>

			{/* PROCESS */}
			<TabPanel
				header="Header I"
				headerTemplate={tabTwoHeaderTemplate}
			>
				<div className="hidden lg:block w-full text-sm lg:text-[0.7rem]  xl:text-[0.8rem]   text-left  xl:text-center  font-sans ">
					{language === "en" && (
						<>
							The entire process is based on an interview regarding the
							investor's needs and preferences, preceded by a detailed field
							analysis and legal conditions of the developed area. For this
							purpose, we use GIS software and aerial photos, which allows us to
							predict and eliminate all threats to the planned investment. After
							determining the final version of the concept, we start preparing
							the project for the needs of administrative procedures and
							construction processes.
							<br /> <br /> We work using BIM software - it is parametric
							software that allows the preparation of documentation from the
							initial stages in 3D technology. Despite better inter-industry
							coordination, the mentioned technology allows us, among other
							things, to provide a 3D design model for independent viewing by
							the client via an online browser. In addition, we try to make the
							entire process as transparent as possible for each party, which is
							why we provide constant access to tracking the details of the work
							progress via the monday.com platform. For each client, after
							finalizing the concept, we provide a mock-up of the final design
							in the form of a 3D print.
						</>
					)}
					{language === "pl" && (
						<>
							Cały proces oparty jest na wywiadzie dotyczącym potrzeb i upodobań
							inwestora, poprzedzonym szczegółową analizą terenową oraz
							uwarunkowań prawnych opracowywanego terenu. W tym celu
							wykorzystujemy oprogramowanie GIS oraz zdjęcia z powietrza, co
							pozwala nam przewidzieć i wyeliminować wszystkie zagrożenia dla
							planowanej inwestycji. Po ustaleniu finalnej wersji koncepcji,
							przystępujemy do przygotowania projektu na potrzeby procedur
							administracyjnych oraz procesów budowlanych. <br /> <br />{" "}
							Pracujemy wykorzystując oprogramowanie BIM - jest to
							oprogramowanie parametryczne pozwalające na sporządzanie
							dokumentacji od początkowych faz w technologii 3D. Pomimo lepszej
							koordynacji międzybranżowej, wspomniana technologia pozwala nam
							między innymi udostępniać model projektu 3D do samodzielnego
							wglądu klientowi poprzez przeglądarkę online. Ponadto staramy się,
							aby cały proces był jak najbardziej przejrzysty dla każdej ze
							stron, dlatego zapewniamy stały dostęp do śledzenia szczegółów
							postępu prac poprzez platformę monday.com. Dla każdego klienta po
							sfinalizowaniu koncepcji dostarczamy makietę finalnego projektu w
							postaci wydruku 3D.
						</>
					)}

					{language === "de" && (
						<>
							Der gesamte Prozess basiert auf einem Gespräch über die
							Bedürfnisse und Vorlieben des Investors, dem eine detaillierte
							Feldanalyse und rechtliche Bedingungen des entwickelten Gebiets
							vorausgehen. Zu diesem Zweck verwenden wir GIS-Software und
							Luftbilder, die es uns ermöglichen, alle Bedrohungen für die
							geplante Investition vorherzusagen und zu beseitigen. Nachdem wir
							die endgültige Fassung des Konzepts festgelegt haben, beginnen wir
							mit der Vorbereitung des Projekts auf die Anforderungen der
							Verwaltungsabläufe und Bauprozesse. <br /> <br /> Wir arbeiten mit
							BIM-Software – einer parametrischen Software, die die Erstellung
							von Dokumentationen bereits in der Anfangsphase in 3D-Technologie
							ermöglicht. Trotz besserer branchenübergreifender Abstimmung
							ermöglicht uns die genannte Technologie unter anderem, ein
							3D-Entwurfsmodell zur unabhängigen Betrachtung durch den Kunden
							über einen Online-Browser bereitzustellen. Darüber hinaus
							versuchen wir, den gesamten Prozess für jede Partei so transparent
							wie möglich zu gestalten, weshalb wir über die Plattform
							monday.com einen ständigen Zugriff auf die Verfolgung der Details
							des Arbeitsfortschritts ermöglichen. Für jeden Kunden stellen wir
							nach der Finalisierung des Konzepts ein Mock-up des endgültigen
							Entwurfs in Form eines 3D-Drucks zur Verfügung.
						</>
					)}
				</div>
			</TabPanel>

			{/* OFFER */}
			<TabPanel
				header="Header I"
				headerTemplate={tabThreeHeaderTemplate}
			>
				<div className="hidden lg:flex w-full text-sm lg:text-[0.7rem]  xl:text-[0.8rem] text-left  xl:text-center font-sans ">
					<p className={`${language === "pl" ? "hidden" : "block"}`}>
						Currently, we operate dynamically throughout Poland, offering
						comprehensive design services, starting from the concept through
						construction/execution design, carrying out administrative
						procedures, ending with supervision, including investor
						representation. We design diverse buildings and interiors that are
						an inseparable element of the facilities we develop, creating a
						coherent whole. We carry out various orders, i.e. audits of
						collections, answering the question of what the investor actually
						needs and how we can solve the problem using architectural
						solutions.
						<br />
						<br /> We also implement investment projects and cooperate with
						developers, offering comprehensive services from land absorption
						analyzes to advertising materials.Thanks to constant cooperation
						with industry specialists, we provide detailed, timely design
						documentation. Moreover, thanks to multi-discipline joint work from
						the beginning of the project, we are able to eliminate many
						coordination errors and cost-optimize our projects, which we
						perfectly prove in the executive documentation.
					</p>

					{language === "pl" && (
						<>
							Aktualnie prężnie działamy na terenie całej Polski oferując
							kompleksową obsługę projektową począwszy od koncepcji poprzez
							projekt budowlany/wykonawczy, przeprowadzenie procedur
							administracyjnych po nadzorowanie łącznie z zastępstwem
							inwestorskim. Projektujemy zróżnicowane budynki i wnętrza będące
							nierozłącznym elementem opracowywanych przez nas obiektów, tworząc
							spójną całość. Wykonujemy zróżnicowane zlecenia tj. audyty.zbiorów
							kolekcjonerskich, odpowiadając na pytanie czego potrzebuje de
							facto inwestor i w jaki sposób możemy rozwiązać problem za pomocą
							rozwiązań architektonicznych. Realizujemy również projekty
							inwestycyjne, współpracujemy z deweloperami proponując kompleksowe
							usługi od analiz chłonności terenu po materiały reklamowe. <br />
							<br /> Dzięki stałej współpracy ze specjalistami branżowymi
							zapewniamy szczegółową, terminowo wykonaną dokumentację
							projektową. Ponadto dzięki wielobranżowej wspólnej pracy od
							początku projektu jesteśmy w stanie wyeliminować wiele błędów
							koordynacyjnych i optymalizować kosztowo nasze projekty, co
							doskonale udowadniamy w dokumentacji wykonawczej.
						</>
					)}
				</div>
			</TabPanel>
			{/* contact */}

			<TabPanel
				header="Header I"
				headerTemplate={tabFourHeaderTemplate}
			>
				<div className="hidden lg:block w-full lg:w-[310px]  xl:w-[320px] 2xl:w-[450px] xl:p-0 text-sm lg:text-[0.7rem]  xl:text-[0.8rem]  text-left  xl:text-left font-sans">
					{language === "en" && (
						<p className="xl:text-lg mb-6">
							Working Hours: Every Working Day <br /> 9:00 - 19:00
						</p>
					)}
					{language === "pl" && (
						<p className="xl:text-lg mb-6">
							9-19 czas pracy: dni robocze
							<br /> 9:00 - 19:00
						</p>
					)}
					{language === "de" && (
						<p className="xl:text-lg mb-6">
							Arbeit Zeit : Arbeitstage <br /> 9:00 - 19:00
						</p>
					)}
					{/*                                                                                                                                                ail                                                                                                                                              info@swiatarchitekt.pl
					 */}
					<div className="text-left  w-11/12 flex flex-col justify-center gap-2 items-start  ">
						<div className="flex justify-between items-center  w-full">
							<p>Tel:</p>{" "}
							<a
								href="tel:+0048609860020"
								className=""
							>
								0048 609 860 020
							</a>
						</div>
						<div className="flex justify-between items-center  w-full">
							<p>Email: </p>
							<a
								href="mailto:info@swiatarchitekt.pl"
								className=" hover:font-bold transform-all duration-300 ease-in"
							>
								info@swiatarchitekt.pl
							</a>
						</div>
						{language === "en" && (
							<div className="flex justify-between items-center  w-full">
								<p>Address:</p>
								<>Poland • Gdynia • Redłowo</>{" "}
							</div>
						)}
						{language === "de" && (
							<div className="flex justify-between items-center  w-full">
								<p>Adres:</p>
								<p> Poland • Gdynia • Redłowo</p>{" "}
							</div>
						)}
						{language === "pl" && (
							<div className="flex justify-between items-center  w-full">
								<p>Adres:</p>
								<> Polska • Gdynia • Redłowo</>{" "}
							</div>
						)}

						<div className="mt-2 flex justify-between w-full gap-2">
							<a
								href="#"
								className=" flex gap-2 items-center group"
							>
								<i
									className="pi pi-linkedin text-white lg:text-gray-500 font-bold group-hover:text-black"
									style={{ fontSize: "1rem" }}
								></i>
								LinkedIn
							</a>
							<a
								href="#"
								className=" flex gap-2 items-center group"
							>
								<i
									className="pi pi-instagram text-white lg:text-gray-500 font-bold group-hover:text-black"
									style={{ fontSize: "1rem" }}
								></i>
								Instagram
							</a>
							<a
								href="#"
								className=" flex gap-2 items-center group"
							>
								<i
									className="pi pi-facebook text-white lg:text-gray-500 font-bold group-hover:text-black"
									style={{ fontSize: "1rem" }}
								></i>
								Facebook
							</a>
						</div>

						{language === "en" && (
							<div className="mt-4">
								We are able to conduct meetings in the office and online,
								including using virtual reality. To obtain more detailed
								information, including an approximate quote and deadline, please
								contact us by e-mail briefly regarding the construction project.
							</div>
						)}

						{language === "pl" && (
							<div className="mt-4">
								Spotkania jesteśmy w stanie zrealizować w biurze oraz online, w
								tym również korzystając z wirtualnej rzeczywistości. W celu
								uzyskania bardziej szczegółowych informacji w tym przybliżonej
								wyceny, terminu prosimy o kontakt.
							</div>
						)}

						{language === "de" && (
							<div className="mt-4">
								Wir sind in der Lage, Meetings im Büro und online durchzuführen,
								auch unter Einsatz von Virtual Reality. Für nähere
								Informationen, inklusive eines ungefähren Angebots und Termins,
								kontaktieren Sie uns bitte kurz per E-Mail zum Bauvorhaben.
							</div>
						)}
					</div>
				</div>
			</TabPanel>
		</TabView>
	);
};

export default HomeContentTabs;
