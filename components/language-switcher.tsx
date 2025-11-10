'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    gtranslateSettings: any;
    googleTranslateElementInit2: () => void;
    gt_translate_script: HTMLScriptElement;
  }
}

export function LanguageSwitcher() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Configuração do widget
    window.gtranslateSettings = {
      default_language: 'pt',
      // Modifique este array para adicionar ou remover idiomas
      languages: [
        'pt', // Português
        'en', // Inglês
        'es', // Espanhol
        'fr', // Francês
        'de', // Alemão
        'it', // Italiano
        // Você pode adicionar mais idiomas aqui
      ],
      wrapper_selector: '.gtranslate_wrapper',
      // Você também pode personalizar o estilo das bandeiras
      flag_style: '2d', // Pode ser '2d' ou '3d'
      // Opcionalmente, você pode usar bandeiras alternativas
      alt_flags: {
        pt: 'brazil', // Usa bandeira do Brasil para português
        en: 'usa',    // Usa bandeira dos EUA para inglês
      },
      switcher_horizontal_position: 'left',
      switcher_vertical_position: 'bottom',
      float_switcher_open_direction: 'bottom',
      url_structure: 'none',
      detect_browser_language: true,
    }

    // Função necessária para o Google Translate
    window.googleTranslateElementInit2 = function() {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'pt',
        autoDisplay: false
      }, 'google_translate_element2')
    }
  }, [])

  return (
    <>
      <div id="google_translate_element2" />
      <div className="gtranslate_wrapper" />
      <Script 
        src="/js/gtranslate-widget.js"
        data-gt-widget-id="mywidget1"
        strategy="afterInteractive"
      />
    </>
  )
}