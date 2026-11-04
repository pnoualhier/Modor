import fs from 'fs';
import path from 'path';
import https from 'https';

const TARGET_DIR = path.resolve('public/images/historical');

const IMAGES_TO_DOWNLOAD = [
  // Designers
  {
    filename: 'rose_bertin_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Rose_Bertin_Trinquesse.png'
  },
  {
    filename: 'charles_frederick_worth.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Charles_Fr%C3%A9d%C3%A9ric_Worth.jpg'
  },
  {
    filename: 'jeanne_paquin_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Madame_Paquin%2C_c.1915.png'
  },
  {
    filename: 'paul_poiret_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Paulpoiret.jpg'
  },
  {
    filename: 'coco_chanel_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Coco_Chanel_in_Los_Angeles%2C_1931_%28cropped%29.jpg'
  },
  {
    filename: 'madeleine_vionnet_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/DUNAND_Jules_John_-_MADELEINE_VIONNET.jpg'
  },
  {
    filename: 'schiaparelli_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/%22Portrait_d%27Elsa_Schiaparelli%22_de_J._Dunand_%28mus%C3%A9e_des_arts_d%C3%A9coratifs%2C_Paris%29.jpg'
  },
  {
    filename: 'christian_dior_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Christian_Dior_1954.jpg'
  },
  {
    filename: 'pierre_balmain_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Pierre_Balmain_and_Ruth_Ford%2C_photographed_by_Carl_Van_Vechten%2C_November_9%2C_1947.jpg'
  },
  {
    filename: 'hubert_givenchy_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Hubert_de_Givenchy_in_Beverly_Hills%2C_1978.jpg'
  },
  {
    filename: 'yves_saint_laurent_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Yves_Saint-Laurent_at_his_old_studio_of_the_same_name%2C_1961_%28cropped%29.jpg'
  },
  {
    filename: 'andre_courreges_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Andr%C3%A9_Courr%C3%A8ges.jpg'
  },
  {
    filename: 'thierry_mugler_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Manfred_Thierry_Mugler.jpg'
  },
  {
    filename: 'claude_montana_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Montana_lynx_fur_jacket%2C_Slupinski_D%C3%BCsseldorf_2011_%281%29.jpg'
  },
  {
    filename: 'jean_paul_gaultier_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Jean_Paul_Gaultier_im_Schwuz_am_17-Mar-2015_arte_2.jpg'
  },
  {
    filename: 'karl_lagerfeld_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Karl_Lagerfeld_2014.jpg'
  },
  {
    filename: 'simon_jacquemus_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Simon_Porte_Jacquemus%2C_2015_at_the_Paris_Fashion_Week_Spring.jpg'
  },
  {
    filename: 'louis_hippolyte_leroy_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/En_t%C3%AAte_Leroy_1807.jpg'
  },
  {
    filename: 'jean_patou_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Jean_Patou.jpg'
  },
  {
    filename: 'sonia_rykiel_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Sonia_Rykiel_.jpg'
  },
  {
    filename: 'kenzo_takada_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Kenzo_Takada_cropped_2_Kenzo_Takada_20170310.jpg'
  },
  {
    filename: 'martin_margiela_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/1997_Maison_Martin_Margiela_white_dress_and_red_coat%2C_Winter_1997-98_collection_2.jpg'
  },
  {
    filename: 'marine_serre_portrait.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Marine_Serre_-_Awakened_Icon_-_Amor_Fati_SS_2021.jpg'
  },

  // Garments (22 garments)
  {
    filename: 'vertugadin_wiki.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Anne_of_Denmark_Gheeraerts.jpg'
  },
  {
    filename: 'fraise_renaissance.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Guise.jpg'
  },
  {
    filename: 'corps_baleine_mad.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Corps_d%27habit_de_cour%2C_1920.1.1870%281%29.jpg'
  },
  {
    filename: 'robe_francaise_detail.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Robe_%C3%A0_la_Fran%C3%A7aise_MET_DT4364.jpg'
  },
  {
    filename: 'robe_anglaise_galliera.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Robe_%C3%A0_l%27Anglaise.jpg'
  },
  {
    filename: 'panier_wiki.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Woman%27s_Corset_LACMA_M.2007.211.353.jpg'
  },
  {
    filename: 'robe_empire_met.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Merry-Joseph_Blondel_-_Felicite-Louise-Julie-Constance_de_Durfort.jpg'
  },
  {
    filename: 'manche_gigot_detail.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Ferdinand_Georg_Waldm%C3%BCller_-_Der_Notar_Dr._Josef_August_Eltz_mit_seiner_Gattin_Caroline%2C_geb._Schaumburg%2C_und_den_acht_Kindern_in_Ischl_-_2567_-_%C3%96sterreichische_Galerie_Belvedere.jpg'
  },
  {
    filename: 'crinoline_cage_archive.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Cage_crinoline_MET_1976.208.9_S.jpg'
  },
  {
    filename: 'tournure_wiki.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Bustle_c._1885.jpg'
  },
  {
    filename: 'corset_1890_galliera.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Corset_MET_DT200606.jpg'
  },
  {
    filename: 'jupon_dentelle.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Petticoat_MET_50.10.17_CP4.jpg'
  },
  {
    filename: 'robe_belle_epoque_detail.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Harrods_1909.jpg'
  },
  {
    filename: 'robe_garconne_1925.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Louise_Brooks_ggbain_32453u_crop.jpg'
  },
  {
    filename: 'robe_charleston_perles.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Halflange_mouwloze_avondjapon_van_goudkant_en_lam%C3%A9_in_de_rok_uitlopend_tot_een_koperrode_kleur%2C_met_een_verlaagde_taille%2C_objectnr_20846%281%29.JPG'
  },
  {
    filename: 'robe_biais_vionnet.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/DUNAND_Jules_John_-_MADELEINE_VIONNET.jpg'
  },
  {
    filename: 'dior_bar_archive.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Christian_Dior_1954.jpg'
  },
  {
    filename: 'tailleur_chanel_1954.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bundesarchiv_Bild_183-59393-0002%2C_Zur_Vorbereitung_der_Wahlen%2C_Kleiner_Betrieb_mit_gro%C3%9Fen_Zielen..jpg'
  },
  {
    filename: 'ysl_smoking_1966.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Yves_St_Laurent_le_smoking_at_deYoung_Museum_San_Francisco.jpg'
  },
  {
    filename: 'courreges_minijupe_1965.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Woman_in_miniskirt_with_big_purple_bag.jpg'
  },
  {
    filename: 'flare_pants_70s.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/TeenIn11968a.jpg'
  },
  {
    filename: 'montana_power_suit_1984.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Margaret_Thatcher_stock_portrait_%28cropped%29.jpg'
  }
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const req = https.get(url, { headers: { 'User-Agent': 'ModorEncyclopediaBot/1.0 (https://modor.app; contact@modor.app)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(destPath);
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(destPath));
      });
    });
    req.on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function main() {
  console.log(`Starting download of ${IMAGES_TO_DOWNLOAD.length} images from Wikipedia/Wikimedia Commons...`);
  let success = 0;
  let failed = 0;

  for (const item of IMAGES_TO_DOWNLOAD) {
    const targetPath = path.join(TARGET_DIR, item.filename);
    try {
      await downloadFile(item.url, targetPath);
      const stats = fs.statSync(targetPath);
      console.log(`✓ [${stats.size} bytes] ${item.filename} downloaded from ${item.url.slice(0, 70)}...`);
      success++;
    } catch (err) {
      console.error(`✗ Failed ${item.filename}:`, err.message);
      failed++;
    }
  }

  console.log(`\nCompleted: ${success} succeeded, ${failed} failed.`);
}

main();
