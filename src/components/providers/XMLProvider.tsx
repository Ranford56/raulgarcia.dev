import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { IconBrandGithubFilled, IconBrandInstagram, IconFileCv } from '@tabler/icons-react';
import { Tab } from "../../interfaces/interfaces";

interface XMLContextType {
  items: Tab[];
  toggleActive: (id: number) => void;
}

const XMLContext = createContext<XMLContextType | undefined>(undefined);

export function XMLProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Tab[]>([]);

  useEffect(() => {
    const meh: Tab[] = [
      {
        id: 0,
        title: "About me",
        active: true,
        tabItems: [
          { id: 0, title: "Github", date: 1, url: "https://github.com/Ranford56", icon: <IconBrandGithubFilled size={20} /> },
          { id: 1, title: "Instagram", date: 2, url: "https://www.instagram.com/ranford56/", icon: <IconBrandInstagram size={20} /> },
          { id: 2, title: "Curriculum Vitae", date: 3, url: "/raulGarciaCV3.1.pdf", icon: <IconFileCv size={20} /> },

        ]
      },
      // { id: 1, title: "Projects", active: false, tabItems: [] },
      // { id: 2, title: "Blog", active: false, tabItems: [] },
    ];
    setItems(meh);
  }, []);

  const toggleActive = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, active: !item.active } : {...item, active: false}
      )
    );
  };

  return (
    <XMLContext.Provider value={{ items, toggleActive }}>
      {children}
    </XMLContext.Provider>
  );
}

export function useXMLData() {
  const context = useContext(XMLContext);
  if (!context) {
    throw new Error("useXMLData must be used within an XMLProvider");
  }
  return context;
}

