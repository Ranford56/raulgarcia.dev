import { Tab } from "../interfaces/interfaces"
import { useXMLData } from "./providers/XMLProvider"

interface XMLContextType {
  items: Tab[];
  toggleActive: (id: number) => void;
}
const PreviewLanding = () => {
	const tabsXML:XMLContextType | undefined = useXMLData()
	
	return (
		<>
			<div className="flex flex-row gap-6 justify-between mb-5 mt-2">
				{tabsXML.items.map((tab)=>{
					return(
						<div className={tab.active ? "px-2 py-1 animate-blink" : "px-2 py-1"} onClick={()=>{tabsXML.toggleActive(tab.id)}} key={tab.id}>
							<p>{tab.title}</p>
						</div>
					)
				})}
			</div>
			<div className="inline-flex flex-col gap-3 justify-center md:justify-start px-1">
				{tabsXML.items.find((tab)=>tab.active == true)?.tabItems.map((tabItem)=>{
					return(
						//add icon inline befor the text
						<div className="inline-flex items-center gap-2" key={tabItem.id}>
							{tabItem.icon}
							<a href={tabItem.url} target="_blank">{tabItem.title}</a>
						</div>
						
					)
				})}
			</div>
		</>
	)
}

export default PreviewLanding
