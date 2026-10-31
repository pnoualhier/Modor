import { HistoricalSource } from '../types';

export const HISTORICAL_SOURCES: HistoricalSource[] = [
  {
    id: 'SRC_GALLIERA',
    title: 'Collections permanentes et expositions patrimoniales',
    author: 'Conservateurs du Palais Galliera',
    institution: 'Palais Galliera — Musée de la Mode de la Ville de Paris',
    year: '1977-2024',
    url: 'https://www.palaisgalliera.paris.fr/fr/collections',
    license: 'Domaine Public / Données ouvertes Paris Musées',
    notes: 'Référence institutionnelle pour les pièces de cour, crinolines Second Empire et haute couture parisienne.'
  },
  {
    id: 'SRC_BNF_GALLICA',
    title: 'Recueils de gravures de mode, Le Mercure Galant, Le Journal des Dames et des Modes, La Gazette du Bon Ton',
    author: 'BnF Département des Estampes et de la Photographie',
    institution: 'Bibliothèque nationale de France (Gallica)',
    year: '1678-1935',
    url: 'https://gallica.bnf.fr',
    license: 'Domaine Public (Gallica BnF)',
    notes: 'Fonds documentaire d’estampes historiques numérisées, gravures de Bonnart, Watteau, Le Brun et journaux de mode illustrés.'
  },
  {
    id: 'SRC_MAD_PARIS',
    title: 'Fonds Mode et Textile du Musée des Arts Décoratifs',
    author: 'Direction des collections Mode & Textile',
    institution: 'Musée des Arts Décoratifs de Paris (MAD)',
    year: '1864-2024',
    url: 'https://madparis.fr',
    license: 'Collections publiques nationales françaises',
    notes: 'Collections indispensables pour les corps à baleines du XVIIIe siècle, soieries lyonnaises et créateurs contemporains.'
  },
  {
    id: 'SRC_MET_COSTUME',
    title: 'The Costume Institute Collection Database',
    author: 'Curators of The Costume Institute',
    institution: 'The Metropolitan Museum of Art (New York)',
    year: '1937-2024',
    url: 'https://www.metmuseum.org/art/collection/search#!?department=8',
    license: 'Open Access (CCO)',
    notes: 'Base en accès libre CCO fournissant des clichés haute définition de robes à la française, robes empire et silhouettes du XIXe siècle.'
  },
  {
    id: 'SRC_BOCHER',
    title: 'Histoire du costume en France depuis les temps les plus reculés jusqu\'à nos jours',
    author: 'Auguste Racinet & Emmanuel Bocher',
    institution: 'Éditions Firmin-Didot / BnF',
    year: '1888',
    url: 'https://gallica.bnf.fr/ark:/12148/bpt6k54921614',
    license: 'Domaine Public',
    notes: 'Ouvrage monumental en six volumes comprenant 500 planches documentant l’histoire des costumes civils et de cour.'
  },
  {
    id: 'SRC_LELOIR',
    title: 'Dictionnaire du costume et de ses accessoires, des armes et des ouvroirs',
    author: 'Maurice Leloir',
    institution: 'Société de l\'Histoire du Costume / Gründ',
    year: '1951',
    url: 'https://catalogue.bnf.fr/ark:/12148/cb323698886',
    license: 'Ouvrage de référence historiographique',
    notes: 'Dictionnaire encyclopédique de référence pour la terminologie technique des vêtements anciens et sous-structures.'
  },
  {
    id: 'SRC_PAUPER',
    title: 'Le Corps façonné : Histoire du corset et du vêtement féminin de la Renaissance au XXe siècle',
    author: 'Valerie Steele / Denis Bruna',
    institution: 'Éditions du Seuil / MAD Paris',
    year: '2001-2013',
    url: 'https://madparis.fr/la-mecanique-des-dessous-une-histoire-d-une-silhouette-imposee',
    license: 'Étude universitaire et muséale',
    notes: 'Analyse fondamentale des dessous et artifices mécaniques (vertugadins, corps à baleines, crinolines cages, gaines).'
  }
];
