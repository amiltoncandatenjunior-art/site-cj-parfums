// Banco de Dados Local de Perfumes da CJ Parfums
const perfumesData = [
    // KIT DE DESCOBERTA (Exclusivo - Mostrado em todas as coleções)
    {
        id: "set01",
        number: "00",
        name: "Discovery Set",
        category: "all",
        subtitle: "Experiência Completa de Assinaturas",
        description: "Vivencie as assinaturas olfativas da CJ Parfums antes de escolher o frasco de 100ml. Este conjunto reúne 5 de nossas criações em versões de 15ml, oferecendo o tempo necessário para que você acompanhe a evolução e a permanência de cada nota na pele.",
        notes: null,
        occasion: "Para experimentação olfativa residencial.",
        price: "149,00",
        image: "assets/Discovery Set.png",
        tag: "Seleção Personalizada",
        comingSoon: false,
        stock: 45,
        fixation: "N/A",
        projection: "N/A"
    },
    // COLEÇÃO FEMININA
    {
        id: "f01",
        number: "01",
        name: "Queen",
        category: "feminine",
        subtitle: "Majestoso & Sofisticado",
        description: "Queen é o perfume do poder feminino em sua forma mais pura e independente. Reflete a essência de uma mulher dona de si, sofisticada e de personalidade forte, exalando alta costura e classe sem esforço.",
        notes: {
            topo: "Flor de Laranjeira e Bergamota",
            coracao: "Jasmim, Rosa Turca e Ylang Ylang",
            base: "Almíscar, Fava Tonka e Vetiver"
        },
        occasion: "Perfeito para momentos em que você deseja se destacar com sofisticação, jantares, reuniões importantes ou eventos formais.",
        price: "129,00",
        image: "assets/Queen.png",
        tag: "Floral Oriental Nobre",
        comingSoon: false,
        stock: 15,
        fixation: "Longa (8h-10h)",
        projection: "Intensa / Marcante",
        reference: "Coco Mademoiselle da Chanel ou Libre da YSL"
    },
    {
        id: "f02",
        number: "02",
        name: "Aura",
        category: "feminine",
        subtitle: "Proibido & Magnético",
        description: "Aura convida ao desafio e à elegância do inesperado, criando uma atmosfera intensamente magnética. Uma fragrância profunda e sedutora para a mulher que quebra regras com classe absoluta.",
        notes: {
            topo: "Pera e Bergamota",
            coracao: "Tuberosa e Flor de Laranjeira",
            base: "Patchouli, Baunilha e Ambroxan"
        },
        occasion: "Essencialmente noturno e para ocasiões especiais onde o objetivo é deixar um rastro marcante.",
        price: "129,00",
        image: "assets/Aura.png",
        tag: "Floral Intenso",
        comingSoon: false,
        stock: 8,
        fixation: "Extrema (10h+)",
        projection: "Intensa / Sedutora",
        reference: "L\'Interdit da Givenchy"
    },
    {
        id: "f03",
        number: "03",
        name: "Muse",
        category: "feminine",
        subtitle: "Luminoso & Inspirador",
        description: "Celebração das descobertas e das conexões verdadeiras. Feito para a mulher de espírito livre e elegância contemporânea. Envelopa a pele de forma radiante, cremosa e otimista.",
        notes: {
            topo: "Flor de Laranjeira e Bergamota",
            coracao: "Tuberosa e Jasmim Indiano",
            base: "Baunilha de Madagascar, Almíscar Branco e Cedro"
        },
        occasion: "Um perfume versátil de luxo, perfeito para o dia a dia, assinaturas de trabalho ou passeios elegantes.",
        price: "129,00",
        image: "assets/Muse.png",
        tag: "Floral Radiante",
        comingSoon: false,
        stock: 24,
        fixation: "Moderada (6h-8h)",
        projection: "Moderada / Agradável",
        reference: "My Way da Giorgio Armani"
    },
    {
        id: "f04",
        number: "04",
        name: "Pure Vanilla",
        category: "feminine",
        subtitle: "Hipnótico & Envolvente",
        description: "Uma poção de pura sedução, mistério e aconchegante cremosidade. Uma fragrância oriental rica e profunda para a mulher que tem o poder de fascinar e envolver os sentidos de forma intrigante.",
        notes: {
            topo: "Coco, Ameixa e Damasco",
            coracao: "Rosa, Lírio-do-Vale e Jasmim",
            base: "Baunilha, Amêndoa e Sândalo"
        },
        occasion: "Ideal para noites de encontros, climas mais amenos ou momentos onde se deseja uma presença íntima e sedutora.",
        price: "129,00",
        image: "assets/Pure Vanilla.png",
        tag: "Oriental Adocicado",
        comingSoon: false,
        stock: 19,
        fixation: "Longa (8h-10h)",
        projection: "Marcante / Envolvente",
        reference: "Hypnotic Poison da Dior"
    },
    {
        id: "f05",
        number: "05",
        name: "Dream Girl",
        category: "feminine",
        subtitle: "Ousado & Empoderado",
        description: "Uma fragrância que equilibra perfeitamente a audácia e a elegância. Inspirada na dualidade da mulher moderna, esta criação abre com uma explosão vibrante e frutada, evolui para um romantismo clássico e deixa um rastro inesquecível de sofisticação.",
        notes: {
            topo: "Lichia e Groselha Vermelha",
            coracao: "Rosa",
            base: "Baunilha e Vetiver"
        },
        occasion: "Extremamente versátil, excelente para dias quentes, baladas diurnas ou para se sentir poderosa em qualquer momento.",
        price: "129,00",
        image: "assets/Dream Girl.png",
        tag: "Floral Frutado",
        comingSoon: false,
        stock: 31,
        fixation: "Moderada (6h-8h)",
        projection: "Discreta / Íntima",
        reference: "Very Good Girl de Carolina Herrera"
    },
    {
        id: "f06",
        number: "06",
        name: "L'Énigme",
        category: "feminine",
        subtitle: "O Mistério do Amanhã",
        description: "A próxima composição da CJ Parfums cumpre seu tempo de repouso essencial antes de ser revelada.",
        notes: null,
        occasion: "Em breve.",
        price: "",
        image: "assets/Perfume_hero.png",
        tag: "Essência Futura",
        comingSoon: true,
        stock: 0,
        fixation: "N/A",
        projection: "N/A"
    },
    // COLEÇÃO MASCULINA
    {
        id: "m01",
        number: "01",
        name: "Suits",
        category: "masculine",
        subtitle: "Atemporal & Marcante",
        description: "A tradução da masculinidade moderna: livre, autêntica e profundamente sofisticada. Transmite a confiança de um terno sob medida com a leveza de quem domina qualquer ambiente de forma natural.",
        notes: {
            topo: "Bergamota",
            coracao: "Flor de Laranjeira Tunisiana",
            base: "Patchouli"
        },
        occasion: "Extremamente versátil. Perfeito para o dia a dia, reuniões de negócios, jantares sofisticados ou eventos noturnos. É a escolha ideal para se tornar a sua assinatura olfativa definitiva.",
        price: "129,00",
        image: "assets/Suits.png",
        tag: "Amadeirado Nobre",
        comingSoon: false,
        stock: 12,
        fixation: "Longa (8h-10h)",
        projection: "Marcante / Elegante",
        reference: "MYSLF da Yves Saint Laurent"
    },
    {
        id: "m02",
        number: "02",
        name: "Sweet Intrigue",
        category: "masculine",
        subtitle: "Intenso & Magnético",
        description: "O perfume da sedução ousada e da noite sem limites. Cria uma atmosfera de ultra-atração e calor envolvente que domina as festas e desperta o magnetismo e curiosidade absoluta ao redor.",
        notes: {
            topo: "Pêra",
            coracao: "Canela e Sálvia",
            base: "Casca de Baunilha Negra, Âmbar e Patchouli"
        },
        occasion: "Essencialmente noturno e baladeiro. A escolha ideal para festas, baladas e eventos onde o objetivo principal é marcar presença e ser o centro das atenções.",
        price: "129,00",
        image: "assets/Sweet Intrigue.png",
        tag: "Âmbar Adocicado",
        comingSoon: false,
        stock: 7,
        fixation: "Extrema (10h+)",
        projection: "Intensa / Sedutora",
        reference: "Ultra Male de Jean Paul Gaultier"
    },
    {
        id: "m03",
        number: "03",
        name: "Enigma",
        category: "masculine",
        subtitle: "Misterioso & Envolvente",
        description: "A definição de sofisticação noturna e magnetismo dinâmico. Ideal para transitar por festas exclusivas com um charme reservado e envolvente que atrai os olhares de forma natural na curta distância.",
        notes: {
            topo: "Absinto, Anis e Erva-Doce",
            coracao: "Lavanda",
            base: "Almíscar e Baunilha"
        },
        occasion: "Ideal para a noite, baladas ou dias mais frios. Não é tão expansivo quanto o Sweet Intrigue.",
        price: "129,00",
        image: "assets/Enigma.png",
        tag: "Aromático Intrigante",
        comingSoon: false,
        stock: 22,
        fixation: "Longa (8h-10h)",
        projection: "Moderada / Marcante",
        reference: "212 VIP Black de Carolina Herrera"
    },
    {
        id: "m04",
        number: "04",
        name: "Seductive Scandal",
        category: "masculine",
        subtitle: "Intenso & Audacioso",
        description: "O perfume do homem que dita as suas próprias regras e entra no ambiente para nocautear. Traz o contraste perfeito entre a sedução contemporânea doce e uma virilidade forte, potente e inabalável.",
        notes: {
            topo: "Caramelo e Fava Tonka",
            coracao: "Vetiver",
            base: "Vetiver"
        },
        occasion: "Perfume adocidado, perfeito para a noite e baladas.",
        price: "129,00",
        image: "assets/Seductive Scandal.png",
        tag: "Adocicado Envolvente",
        comingSoon: false,
        stock: 9,
        fixation: "Extrema (10h+)",
        projection: "Intensa / Marcante",
        reference: "Scandal Pour Homme de Jean Paul Gaultier"
    },
    {
        id: "m05",
        number: "05",
        name: "Vestigium",
        category: "masculine",
        subtitle: "Potência & Rastro Inesquecível",
        description: "A tradução literal do poder e da imponência masculina com projeção avassaladora. Uma fragrância intensa, densa e marcante que anuncia a chegada e permanece no ar de forma lendária.",
        notes: {
            topo: "Flor de Laranjeira e Limão",
            coracao: "Lavanda, Cardamomo e Noz-Moscada",
            base: "Fava Tonka e Vetiver"
        },
        occasion: "Perfume noturno e para dias frios. Deixa um rastro enorme e é o mais potente da coleção.",
        price: "129,00",
        image: "assets/Vestigium.png",
        tag: "Oriental Amadeirado",
        comingSoon: false,
        stock: 4,
        fixation: "Extrema (12h+)",
        projection: "Projeção Avassaladora",
        reference: "Silver Scent de Jacques Bogart"
    },
    {
        id: "m06",
        number: "06",
        name: "Joker",
        category: "masculine",
        subtitle: "Frescor & Liberdade",
        description: "Equilíbrio perfeito entre sofisticação clássica e a energia revigorante do oceano. Uma fragrância limpa, luminosa e radiante que atua como o verdadeiro curinga ideal do guarda-roupa masculino.",
        notes: {
            topo: "Lima, Limão e Bergamota",
            coracao: "Notas Oceânicas",
            base: "Almíscar, Cedro e Musgo de Carvalho"
        },
        occasion: "Super versátil. Excelente para dias quentes e para praticamente todas as ocasiões.",
        price: "129,00",
        image: "assets/Joker.png",
        tag: "Cítrico Aquático",
        comingSoon: false,
        stock: 42,
        fixation: "Moderada (6h-8h)",
        projection: "Discreta / Fresca",
        reference: "Acqua Di Giò de Giorgio Armani"
    }
];

// Dynamic rendering function with modern View Transitions
function renderPerfumes(filter = 'all', useTransition = true) {
    const grid = document.getElementById('perfumes-grid');
    if (!grid) return;
    
    const updateDOM = () => {
        grid.innerHTML = '';
        
        // Allow elements with category 'all' to show in feminine and masculine lists (like the Discovery Set)
        const filtered = perfumesData.filter(p => filter === 'all' || p.category === filter || p.category === 'all');
        
        filtered.forEach(p => {
            let cardHtml = '';
            if (p.comingSoon) {
                // Card especial "Em Breve"
                cardHtml = `
                <div class="reveal group bg-armani-charcoal/20 border border-white/5 p-6 flex flex-col justify-between transition-all duration-700 hover:shadow-gold-glow transform hover:-translate-y-1.5 relative overflow-hidden select-none" style="view-transition-name: perfume-${p.id};">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                    <div>
                        <div class="overflow-hidden border border-white/5 bg-black relative mb-6 aspect-[4/5]">
                            <div class="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent blur-md animate-pulse"></div>
                            <img src="${p.image}" alt="${p.name}" class="card-parallax-img w-full h-full object-cover transform scale-100 opacity-20 filter grayscale blur-[2px]">
                            <div class="absolute inset-0 flex items-center justify-center z-20">
                                <span class="text-[10px] tracking-[0.4em] text-white/50 font-bold uppercase animate-pulse">EM BREVE</span>
                            </div>
                        </div>
                        <div class="space-y-3 relative z-20">
                            <span class="text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold block">${p.tag}</span>
                            <h3 class="font-cinzel text-2xl font-bold tracking-wide text-white/80">N° ${p.number} — ${p.name}</h3>
                            <p class="text-sm font-light text-white/40 leading-relaxed min-h-[72px]">
                                ${p.description}
                            </p>
                        </div>
                    </div>
                    <div class="mt-8 pt-6 border-t border-white/5 relative z-20 flex flex-col space-y-3">
                        <a href="#newsletter" class="w-full border border-white/30 text-white/70 hover:border-white hover:text-white text-xs text-center uppercase tracking-[0.2em] font-medium py-3 transition-all duration-500">
                            Receber Novidades
                        </a>
                    </div>
                </div>
                `;
            } else {
                // Card de produto padrão
                cardHtml = `
                <div class="reveal group bg-armani-charcoal/20 border border-white/5 hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-700 hover:shadow-gold-glow transform hover:-translate-y-1.5" style="view-transition-name: perfume-${p.id};">
                    <div>
                        <div class="overflow-hidden border border-white/5 bg-black relative mb-6 aspect-[4/5]">
                            <img src="${p.image}" alt="${p.name}" loading="lazy" class="card-parallax-img w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1500ms]">
                            <div class="absolute top-4 left-4 bg-black/85 border border-white/10 text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-semibold">
                                ${p.tag}
                            </div>
                        </div>
                        <div class="space-y-3">
                            <span class="text-[9px] uppercase tracking-[0.25em] text-white/40 font-medium block">
                                N° ${p.number} — ${p.category === 'feminine' ? 'FEMININA' : (p.category === 'masculine' ? 'MASCULINA' : 'COLEÇÃO COMPLETA')}
                            </span>
                            <h3 class="font-cinzel text-2xl font-bold tracking-wide text-white group-hover:text-white/80 transition-colors duration-300">${p.name}</h3>
                            <p class="text-sm font-light text-white/60 leading-relaxed min-h-[72px]">
                                ${p.description}
                            </p>
                            
                            ${p.notes ? `
                            <!-- Pirâmide Olfativa Compacta -->
                            <div class="pt-4 mt-2 border-t border-white/5 space-y-2 text-[11px] font-light text-white/40">
                                <p class="tracking-wide"><span class="text-white/20 uppercase text-[9px] tracking-widest mr-1.5 font-medium">Topo:</span> ${p.notes.topo}</p>
                                <p class="tracking-wide"><span class="text-white/20 uppercase text-[9px] tracking-widest mr-1.5 font-medium">Coração:</span> ${p.notes.coracao}</p>
                                <p class="tracking-wide"><span class="text-white/20 uppercase text-[9px] tracking-widest mr-1.5 font-medium">Base:</span> ${p.notes.base}</p>
                            </div>
                            ` : ''}

                            <!-- Performance de Alta Costura -->
                            ${p.fixation !== "N/A" && p.projection !== "N/A" ? `
                            <div class="mt-4 pt-4 border-t border-white/5 space-y-1.5 text-[10px] uppercase tracking-widest text-white/50">
                                <div class="flex justify-between items-center">
                                    <span>Fixação</span>
                                    <span class="text-white font-medium">${p.fixation}</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span>Projeção</span>
                                    <span class="text-white font-medium">${p.projection}</span>
                                </div>
                            </div>
                            ` : ''}

                            <!-- Estoque Reativo -->
                            <div class="mt-3 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/50">
                                <span>Disponibilidade</span>
                                <span id="stock-${p.id}" class="text-white font-bold font-mono ${p.stock <= 5 ? 'text-red-400 animate-pulse' : ''}">${p.stock > 0 ? `${p.stock} unidades` : 'Esgotado'}</span>
                            </div>

                            <!-- Volumetria (ML) -->
                            <div class="mt-3 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/50">
                                <span>Volumetria</span>
                                <span class="text-white font-bold">${p.id !== 'set01' ? '100ml' : '5x 15ml'}</span>
                            </div>

                            ${p.reference ? `
                            <!-- Referência Olfativa Comparativa -->
                            <div class="mt-3 pt-3 border-t border-white/5 text-[9px] uppercase tracking-wider text-white/40 leading-relaxed text-left">
                                <span class="text-white/20 mr-1">Nota:</span> Se você gosta de <span class="text-white font-medium">${p.reference}</span>, vai gostar desta criação.*
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    <div class="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div>
                            <p class="text-[9px] uppercase tracking-[0.2em] text-white/30">Valor Exclusivo</p>
                            <p class="font-cinzel text-lg font-bold text-white mt-0.5">R$ ${p.price}</p>
                            <p class="text-[9px] text-white/40 tracking-wider mt-0.5">ou 6x de R$ ${(parseFloat(p.price.replace(',', '.')) / 6).toFixed(2).replace('.', ',')} sem juros</p>
                            <p class="text-[9px] text-white/60 tracking-wider mt-0.5 font-medium">ou R$ ${(parseFloat(p.price.replace(',', '.')) * 0.9).toFixed(2).replace('.', ',')} à vista no PIX <span class="text-white/40">(10% off)</span></p>
                        </div>
                        <button id="buy-btn-${p.id}" onclick="${p.stock > 0 ? `addToCart('${p.id}')` : ''}" ${p.stock <= 0 ? 'disabled' : ''} class="bg-transparent border border-white/30 text-white/70 hover:bg-white hover:text-black disabled:border-white/5 disabled:text-white/20 disabled:hover:bg-transparent disabled:hover:text-white/20 text-xs uppercase tracking-[0.2em] font-medium px-4 py-2.5 transition-all duration-500">
                            ${p.stock > 0 ? 'Comprar' : 'Esgotado'}
                        </button>
                    </div>
                </div>
                `;
            }
            
            grid.innerHTML += cardHtml;
        });

        // Re-initialize dynamic scroll reveals (for browsers without CSS Scroll Timeline support)
        initReveal();
    };
    
    if (!useTransition) {
        updateDOM();
        return;
    }

    if (!document.startViewTransition) {
        // Fallback for browsers without View Transitions support
        grid.style.opacity = '0';
        setTimeout(() => {
            updateDOM();
            grid.style.opacity = '1';
        }, 300);
    } else {
        grid.style.opacity = '1';
        document.startViewTransition(() => updateDOM());
    }
}

// Filtering controller
let activeFilterCategory = 'all';
function filterCollection(category) {
    activeFilterCategory = category;
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('bg-white', 'text-black', 'font-semibold');
        btn.classList.add('border-white/10', 'text-white/60');
    });
    
    const activeBtn = document.getElementById(`filter-${category}`);
    if (activeBtn) {
        activeBtn.classList.remove('border-white/10', 'text-white/60');
        activeBtn.classList.add('bg-white', 'text-black', 'font-semibold');
    }
    
    renderPerfumes(category);
}

// High-Performance Scroll Reveal (using IntersectionObserver)
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });
}

// High-Performance Parallax (using requestAnimationFrame and GPU layers)
function initParallax() {
    let tick = false;

    window.addEventListener('scroll', () => {
        if (!tick) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                
                // Parallax for Catalog Card Images
                const cardImgs = document.querySelectorAll('.card-parallax-img');
                cardImgs.forEach(img => {
                    const rect = img.getBoundingClientRect();
                    const viewHeight = window.innerHeight;
                    
                    // Only compute if card is visible inside viewport
                    if (rect.top < viewHeight && rect.bottom > 0) {
                        const relativePos = (rect.top + rect.height / 2) / viewHeight - 0.5;
                        const maxTravel = 25; // max movement in pixels
                        img.style.transform = `translateY(${relativePos * maxTravel}px) scale(1.15)`;
                    }
                });

                tick = false;
            });
            tick = true;
        }
    }, { passive: true });
}

// Initialize dynamic render and scroll effects
window.addEventListener('DOMContentLoaded', () => {
    renderPerfumes('all');
    initReveal();
    initBackToTop();
    initParallax();
});

// Fallback for browsers that don't support native CSS scroll-driven shrinking header
if (!CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (!header) return;
        if (window.scrollY > 50) {
            header.style.paddingTop = '1rem';
            header.style.paddingBottom = '1rem';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        } else {
            header.style.paddingTop = '1.5rem';
            header.style.paddingBottom = '1.5rem';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
}

// Mobile Menu Toggle with complete focus management and accessibility
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('menu-btn');
    if (!menu || !menuBtn) return;
    
    const isClosed = menu.classList.contains('translate-x-full');
    
    if (isClosed) {
        // Open menu
        menu.classList.remove('translate-x-full');
        menu.classList.add('translate-x-0');
        menuBtn.setAttribute('aria-expanded', 'true');
        // Move focus to menu overlay for screen-readers and keyboard users
        menu.focus();
    } else {
        // Close menu
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full');
        menuBtn.setAttribute('aria-expanded', 'false');
        // Return focus to the toggle button
        menuBtn.focus();
    }
}

const menuBtnEl = document.getElementById('menu-btn');
if (menuBtnEl) {
    menuBtnEl.addEventListener('click', toggleMenu);
}

// Escape key to dismiss mobile menu accessibly
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            const isOpened = menu.classList.contains('translate-x-0');
            if (isOpened) {
                toggleMenu();
            }
        }
    }
});

// Journey of Notes Tabs
const tabData = {
    topo: {
        title: "Notas de Topo: O Despertar",
        desc: "A primeira impressão sensorial do perfume. É leve, altamente volátil e cativante. Habilmente formulada para durar entre 15 a 30 minutos na pele ao ser pulverizada. Revela cítricos nobres como a Bergamota da Calábria, o Neroli da Tunísia e um leve toque de especiarias finas.",
        ing: "Bergamota da Calábria, Flor de Laranjeira, Pimenta de Sichuan e Cardamomo Fresco.",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path></svg>`
    },
    coracao: {
        title: "Notas de Coração: A Alma",
        desc: "O verdadeiro coração da assinatura olfativa. Revela-se assim que as notas de topo evaporam, durando entre 2 a 4 horas. É a essência que dá caráter, corpo e personalidade única ao perfume, usando resinas raras e florais exóticos de altíssima fixação.",
        ing: "Madeira de Ébano, Íris Negra do Marrocos, Incenso e Rosa Damascena Absoluta.",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`
    },
    base: {
        title: "Notas de Base: A Memória",
        desc: "O rastro marcante que permanece. São as notas mais ricas e densas que fixam na pele por até 12 horas ou mais, criando uma memória inesquecível de sofisticação. Composta por madeiras nobres, oud real e notas balsâmicas cremosas.",
        ing: "Sândalo Imperial, Oud Real, Âmbar Puro, Baunilha de Madagascar e Almíscar.",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`
    }
};

function switchTab(tabKey) {
    // Update active state of buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('border-armani-gold', 'bg-armani-charcoal/40', 'text-armani-ivory');
        btn.classList.add('border-armani-gold/15', 'bg-transparent', 'text-armani-ivory/50');
    });

    const activeBtn = document.getElementById(`btn-${tabKey}`);
    if (activeBtn) {
        activeBtn.classList.remove('border-armani-gold/15', 'bg-transparent', 'text-armani-ivory/50');
        activeBtn.classList.add('border-armani-gold', 'bg-armani-charcoal/40', 'text-armani-ivory');
    }

    // Animate transition of content
    const contentWrap = document.getElementById('tab-content');
    if (contentWrap) {
        contentWrap.style.opacity = '0';
        
        setTimeout(() => {
            document.getElementById('tab-title').innerText = tabData[tabKey].title;
            document.getElementById('tab-desc').innerText = tabData[tabKey].desc;
            document.getElementById('tab-ing').innerText = tabData[tabKey].ing;
            document.getElementById('tab-icon').innerHTML = tabData[tabKey].icon;
            contentWrap.style.opacity = '1';
        }, 300);
    }
}

// Domínios comuns e suas respectivas correções de digitação
const domainCorrections = {
    'gamil.com': 'gmail.com',
    'gmal.com': 'gmail.com',
    'gmeil.com': 'gmail.com',
    'gmail.co': 'gmail.com',
    'hottmail.com': 'hotmail.com',
    'hotail.com': 'hotmail.com',
    'hotmial.com': 'hotmail.com',
    'hotmail.co': 'hotmail.com',
    'yaho.com': 'yahoo.com',
    'yahou.com': 'yahoo.com',
    'outlok.com': 'outlook.com',
    'outlook.co': 'outlook.com'
};

function checkEmailTypo(email) {
    const parts = email.split('@');
    if (parts.length !== 2) return null;
    const local = parts[0];
    const domain = parts[1].toLowerCase();
    
    if (domainCorrections[domain]) {
        return `${local}@${domainCorrections[domain]}`;
    }
    return null;
}

// Configuração de real-time validation e sugestões de e-mail
window.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('newsletter-email');
    const suggestionContainer = document.getElementById('email-suggestion');
    const suggestionBtn = document.getElementById('btn-suggest-email');

    if (emailInput && suggestionContainer && suggestionBtn) {
        emailInput.addEventListener('input', () => {
            const email = emailInput.value.trim();
            const suggestion = checkEmailTypo(email);
            
            if (suggestion) {
                suggestionBtn.textContent = suggestion;
                suggestionContainer.classList.remove('hidden');
            } else {
                suggestionContainer.classList.add('hidden');
            }
        });

        suggestionBtn.addEventListener('click', () => {
            if (suggestionBtn.textContent) {
                emailInput.value = suggestionBtn.textContent;
                suggestionContainer.classList.add('hidden');
                // Força rediscagem do status de validação CSS
                emailInput.dispatchEvent(new Event('input'));
            }
        });
    }
});

// Premium Dialog Control
function showPremiumDialog(title, bodyHtml, tagText = "CJ Parfums", footerHtml = null) {
    const dialog = document.getElementById('premium-dialog');
    if (!dialog) return;
    
    document.getElementById('dialog-title').innerText = title;
    document.getElementById('dialog-body').innerHTML = bodyHtml;
    document.getElementById('dialog-tag').innerText = tagText;
    
    const footer = document.getElementById('dialog-footer');
    if (footer) {
        if (footerHtml !== null) {
            footer.innerHTML = footerHtml;
            if (footerHtml === "") {
                footer.classList.add('hidden');
            } else {
                footer.classList.remove('hidden');
            }
        } else {
            // Default footer with 'Entendido' button
            footer.innerHTML = `
                <button onclick="closePremiumDialog()" class="w-full bg-white hover:bg-white/90 text-black text-xs font-bold uppercase tracking-[0.3em] py-3.5 transition-all duration-300">
                    Entendido
                </button>
            `;
            footer.classList.remove('hidden');
        }
    }
    
    if (!dialog.open) {
        dialog.showModal();
    }
}

function closePremiumDialog() {
    const dialog = document.getElementById('premium-dialog');
    if (dialog) {
        dialog.close();
    }
}

// Premium Toast Notification System
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    // Toast minimalista de alta costura
    toast.className = `toast-animate-in bg-black border border-white/20 text-white p-4 text-[10px] uppercase tracking-[0.2em] flex items-center justify-between pointer-events-auto shadow-2xl relative select-none max-w-sm w-full`;
    
    // Adiciona borda de destaque dependendo do tipo
    if (type === 'warning') {
        toast.classList.add('border-l-2', 'border-l-yellow-500');
    } else {
        toast.classList.add('border-l-2', 'border-l-white');
    }
    
    toast.innerHTML = `
        <div class="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/40"></div>
        <span class="pr-6 leading-normal">${message}</span>
        <button onclick="this.parentElement.remove()" class="text-white/40 hover:text-white transition-colors duration-300 text-[9px]">✕</button>
    `;
    
    container.appendChild(toast);
    
    // Auto dismiss após 4.5 segundos
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        toast.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 4500);
}

// Newsletter subscription handler
function handleNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.querySelector('input');
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!emailInput || !submitBtn) return;
    
    const email = emailInput.value.trim();
    
    // Verifica e sugere correção antes do envio, se houver
    const suggestion = checkEmailTypo(email);
    if (suggestion) {
        showToast(`Verifique o domínio. Sugestão: ${suggestion}`, 'warning');
    }

    // Ativa o estado de carregamento de alta costura no botão
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <span class="inline-flex items-center justify-center space-x-2">
            <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>ENVIANDO CONVITE...</span>
        </span>
    `;

    // Simula uma chamada de API segura
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        
        // Oculta sugestões se estiverem visíveis
        const suggestionContainer = document.getElementById('email-suggestion');
        if (suggestionContainer) suggestionContainer.classList.add('hidden');
        
        // Abre o dialog  com a mensagem explicativa de Double Opt-In
        showPremiumDialog(
            "CONVITE DE CONFIRMAÇÃO",
            `<p class="mb-4">Seu interesse na <strong>CJ Parfums</strong> foi registrado com sucesso.</p>
             <p class="mb-4 font-mono text-white tracking-wider break-all text-[11px] bg-white/5 p-3 border border-white/10" id="dialog-email-display"></p>
             <p class="mb-4">Enviamos um link de ativação exclusivo para o endereço informado.</p>
             <p class="text-white/40 text-[10px] leading-relaxed">
                <em>Nota:</em> Apenas e-mails reais e ativos receberão o link. Sua inscrição só será ativada após a confirmação em sua caixa de entrada.
             </p>`,
            "Exclusividade Absoluta"
        );
        
        const displayEmail = document.getElementById('dialog-email-display');
        if (displayEmail) displayEmail.textContent = email;
        
        form.reset();
    }, 1800);
}

// Cart and Purchase Handlers
let cartItems = [];

function getPerfumeById(id) {
    if (id && id.startsWith('set01')) {
        return perfumesData.find(p => p.id === 'set01');
    }
    return perfumesData.find(p => p.id === id);
}

function updateProductStockUI(id) {
    const cleanId = (id && id.startsWith('set01')) ? 'set01' : id;
    const perfume = getPerfumeById(cleanId);
    if (!perfume) return;
    
    const stockEl = document.getElementById(`stock-${cleanId}`);
    const buyBtn = document.getElementById(`buy-btn-${cleanId}`);
    
    if (stockEl) {
        stockEl.textContent = perfume.stock > 0 ? `${perfume.stock} unidades` : 'Esgotado';
        
        if (perfume.stock <= 5 && perfume.stock > 0) {
            stockEl.className = "text-red-400 animate-pulse font-bold font-mono";
        } else if (perfume.stock <= 0) {
            stockEl.className = "text-white/20 font-bold font-mono";
        } else {
            stockEl.className = "text-white font-bold font-mono";
        }
    }
    
    if (buyBtn) {
        if (perfume.stock <= 0) {
            buyBtn.disabled = true;
            buyBtn.innerText = 'Esgotado';
            buyBtn.removeAttribute('onclick');
        } else {
            buyBtn.disabled = false;
            buyBtn.innerText = 'Comprar';
            buyBtn.setAttribute('onclick', `addToCart('${cleanId}')`);
        }
    }
}

function addToCart(id) {
    if (id && id.startsWith('set01')) {
        openDiscoveryCustomizer();
        return;
    }
    const perfume = getPerfumeById(id);
    if (!perfume) return;
    
    if (perfume.stock <= 0) {
        showToast(`"${perfume.name}" está esgotado temporariamente.`, "warning");
        return;
    }
    
    perfume.stock -= 1; // Decrement stock live
    cartItems.push(id);
    updateCartBadge();
    showToast(`"${perfume.name}" adicionado à sacola de fragrâncias.`);
    updateProductStockUI(id); // Synchronize DOM instantly with zero layout shifts
}

// --- Customizador do Discovery Set ---
let tempSelectedDiscovery = [];

function toggleDiscoverySelection(id) {
    const index = tempSelectedDiscovery.indexOf(id);
    if (index > -1) {
        tempSelectedDiscovery.splice(index, 1);
    } else {
        if (tempSelectedDiscovery.length >= 5) {
            showToast("Você já selecionou as 5 fragrâncias do seu kit.", "warning");
            return;
        }
        tempSelectedDiscovery.push(id);
    }
    updateDiscoveryCustomizerUI();
}

function updateDiscoveryCustomizerUI() {
    const count = tempSelectedDiscovery.length;
    const countEl = document.getElementById('discovery-count');
    const submitBtn = document.getElementById('confirm-discovery-btn');
    
    if (countEl) {
        countEl.textContent = `${count} / 5`;
    }
    
    if (submitBtn) {
        if (count === 5) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-white/10', 'text-white/20', 'cursor-not-allowed');
            submitBtn.classList.add('bg-white', 'text-black');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove('bg-white', 'text-black');
            submitBtn.classList.add('bg-white/10', 'text-white/20', 'cursor-not-allowed');
        }
    }
    
    const perfumes = perfumesData.filter(p => !p.comingSoon && p.id !== 'set01');
    perfumes.forEach(p => {
        const checkbox = document.getElementById(`chk-${p.id}`);
        const wrapper = document.getElementById(`wrap-${p.id}`);
        const isChecked = tempSelectedDiscovery.includes(p.id);
        
        if (checkbox) {
            checkbox.checked = isChecked;
        }
        
        if (wrapper) {
            if (isChecked) {
                wrapper.classList.remove('border-white/10', 'bg-transparent');
                wrapper.classList.add('border-white', 'bg-white/5');
            } else {
                wrapper.classList.remove('border-white', 'bg-white/5');
                wrapper.classList.add('border-white/10', 'bg-transparent');
            }
            
            if (count >= 5 && !isChecked) {
                wrapper.classList.add('opacity-40', 'pointer-events-none');
            } else {
                wrapper.classList.remove('opacity-40', 'pointer-events-none');
            }
        }
    });
}

function addCustomDiscoveryToCart(selectedIds) {
    const perfume = getPerfumeById('set01');
    if (!perfume) return;
    
    if (perfume.stock <= 0) {
        showToast(`"Discovery Set" está esgotado temporariamente.`, "warning");
        return;
    }
    
    perfume.stock -= 1; // Decrement stock
    const cartKey = `set01:${selectedIds.join(',')}`;
    cartItems.push(cartKey);
    updateCartBadge();
    showToast(`"Discovery Set" personalizado adicionado à sacola.`);
    updateProductStockUI('set01'); // Synchronize DOM instantly
    closePremiumDialog();
}

function openDiscoveryCustomizer() {
    const perfume = getPerfumeById('set01');
    if (perfume && perfume.stock <= 0) {
        showToast("O Discovery Set está esgotado temporariamente.", "warning");
        return;
    }
    
    tempSelectedDiscovery = []; // Reset selections
    const availablePerfumes = perfumesData.filter(p => !p.comingSoon && p.id !== 'set01');
    
    let listHtml = `
        <p class="mb-4 text-white/70 text-xs">Selecione exatamente 5 fragrâncias abaixo de 15ml cada para compor o seu conjunto personalizado de assinaturas:</p>
        <div class="max-h-64 overflow-y-auto border border-white/10 bg-white/5 p-4 space-y-2 mb-4 scrollbar-thin">
    `;
    
    availablePerfumes.forEach(p => {
        listHtml += `
            <div id="wrap-${p.id}" onclick="toggleDiscoverySelection('${p.id}')" class="flex items-center justify-between border border-white/10 p-3 hover:border-white/40 cursor-pointer transition-all duration-300">
                <div class="flex items-center space-x-3">
                    <input type="checkbox" id="chk-${p.id}" onclick="event.stopPropagation(); toggleDiscoverySelection('${p.id}')" class="w-4 h-4 rounded border-white/20 bg-black text-white focus:ring-0 focus:ring-offset-0 pointer-events-none">
                    <div class="flex flex-col text-left">
                        <span class="text-white text-[11px] uppercase tracking-wider font-bold">${p.name}</span>
                        <span class="text-[9px] text-white/40">${p.category === 'feminine' ? 'Feminino' : 'Masculino'} — ${p.tag}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    listHtml += `
        </div>
        <div class="flex justify-between items-center mb-2 pt-2 border-t border-white/10">
            <span class="text-white/40 text-[10px] tracking-wider uppercase">Selecionados</span>
            <span id="discovery-count" class="text-white font-mono text-xs font-bold">0 / 5</span>
        </div>
    `;

    const footerHtml = `
        <div class="space-y-3 pt-2">
            <button id="confirm-discovery-btn" disabled onclick="addCustomDiscoveryToCart(tempSelectedDiscovery)" class="w-full bg-white/10 text-white/20 text-xs font-bold uppercase tracking-[0.3em] py-3.5 transition-all duration-300 cursor-not-allowed">
                Confirmar e Adicionar
            </button>
            <button onclick="closePremiumDialog()" class="w-full bg-transparent hover:bg-white/5 border border-white/20 hover:border-white text-white text-[10px] font-bold uppercase tracking-[0.25em] py-3 transition-all duration-300">
                Cancelar
            </button>
        </div>
    `;
    
    showPremiumDialog("PERSONALIZAR DISCOVERY SET", listHtml, "Coleção 15ml", footerHtml);
    updateDiscoveryCustomizerUI();
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    
    const count = cartItems.length;
    badge.textContent = count;
    
    if (count > 0) {
        badge.classList.remove('opacity-0', 'scale-50');
        badge.classList.add('opacity-100', 'scale-100');
        // Dynamic premium bounce micro-interaction on the bag icon
        const cartBtn = document.getElementById('cart-btn');
        if (cartBtn) {
            cartBtn.classList.add('scale-125');
            setTimeout(() => {
                cartBtn.classList.remove('scale-125');
            }, 250);
        }
    } else {
        badge.classList.remove('opacity-100', 'scale-100');
        badge.classList.add('opacity-0', 'scale-50');
    }
}

function getPerfumePrice(id) {
    const perfume = getPerfumeById(id);
    return perfume && perfume.price ? parseFloat(perfume.price.replace(',', '.')) : 129.00;
}

function incrementCartItem(id) {
    const perfume = getPerfumeById(id);
    if (perfume) {
        if (perfume.stock <= 0) {
            showToast(`Não há mais unidades de "${perfume.name}" em estoque.`, "warning");
            return;
        }
        perfume.stock -= 1; // Decrement stock
        updateProductStockUI(id); // Synchronize DOM instantly
    }
    cartItems.push(id);
    updateCartBadge();
    openCartPreview(); // Re-render dialog dynamically
}

function decrementCartItem(id) {
    const index = cartItems.indexOf(id);
    if (index > -1) {
        cartItems.splice(index, 1);
        const perfume = getPerfumeById(id);
        if (perfume) {
            perfume.stock += 1; // Restore stock
            updateProductStockUI(id); // Synchronize DOM instantly
        }
    }
    updateCartBadge();
    if (cartItems.length === 0) {
        closePremiumDialog();
        showToast("Sua sacola de fragrâncias está vazia.", "warning");
    } else {
        openCartPreview(); // Re-render dialog dynamically
    }
}

function removeCartItem(id) {
    // Count how many items of this ID are in the cart
    const qty = cartItems.filter(item => item === id).length;
    cartItems = cartItems.filter(item => item !== id);
    
    const perfume = getPerfumeById(id);
    if (perfume) {
        perfume.stock += qty; // Restore stock
        updateProductStockUI(id); // Synchronize DOM instantly
    }
    
    updateCartBadge();
    if (cartItems.length === 0) {
        closePremiumDialog();
        showToast("Sua sacola de fragrâncias está vazia.", "warning");
    } else {
        openCartPreview(); // Re-render dialog dynamically
    }
}

function openCartPreview() {
    if (cartItems.length === 0) {
        showToast("Sua sacola de fragrâncias está vazia.", "warning");
        return;
    }
    
    // Consolidate identical item IDs in the cart
    const consolidated = {};
    cartItems.forEach(id => {
        consolidated[id] = (consolidated[id] || 0) + 1;
    });
    
    let listHtml = `
        <p class="mb-4 text-white/70 text-xs">Selecionei suas assinaturas olfativas exclusivas na sacola:</p>
        <div class="max-h-60 overflow-y-auto border border-white/10 bg-white/5 p-4 font-mono text-[11px] space-y-3 text-left mb-4 scrollbar-thin">
    `;
    
    let total = 0;
    for (const [id, qty] of Object.entries(consolidated)) {
        const perfume = getPerfumeById(id);
        if (!perfume) continue;
        const price = getPerfumePrice(id);
        const itemTotal = price * qty;
        total += itemTotal;
        
        let subtextHtml = '';
        if (id.startsWith('set01:')) {
            const selectedIds = id.split(':')[1].split(',');
            const names = selectedIds.map(sid => {
                const p = perfumesData.find(perf => perf.id === sid);
                return p ? p.name : sid;
            });
            subtextHtml = `<span class="text-[8px] text-white/30 font-normal leading-normal mt-0.5 max-w-[160px] truncate block" title="Inclui: ${names.join(', ')}">Inclui: ${names.join(', ')}</span>`;
        }
        
        listHtml += `
            <div class="flex justify-between items-center border-b border-white/5 pb-2.5 last:border-b-0 last:pb-0">
                <div class="flex flex-col">
                    <span class="text-white tracking-widest uppercase font-bold">${perfume.name}</span>
                    ${subtextHtml}
                    <span class="text-[9px] text-white/40 font-normal">R$ ${price.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="flex items-center space-x-2.5">
                    <button onclick="decrementCartItem('${id}')" class="w-6 h-6 border border-white/10 hover:border-white text-white flex items-center justify-center transition-colors text-xs font-semibold focus:outline-none" aria-label="Diminuir quantidade de ${perfume.name}">-</button>
                    <span class="text-white text-xs font-bold w-6 text-center">${qty}x</span>
                    <button onclick="incrementCartItem('${id}')" class="w-6 h-6 border border-white/10 hover:border-white text-white flex items-center justify-center transition-colors text-xs font-semibold focus:outline-none" aria-label="Aumentar quantidade de ${perfume.name}">+</button>
                    <button onclick="removeCartItem('${id}')" class="w-6 h-6 ml-1 border border-white/10 hover:border-red-500/50 hover:bg-red-950/20 text-white/40 hover:text-red-400 flex items-center justify-center transition-colors text-[10px] focus:outline-none" title="Remover da sacola" aria-label="Remover ${perfume.name} da sacola">✕</button>
                </div>
            </div>
        `;
    }
    
    listHtml += `
        </div>
        <div class="border-t border-white/10 pt-4 flex justify-between items-center">
            <span class="text-white/40 text-[9px] tracking-[0.2em] uppercase">Total Estimado</span>
            <span class="text-white font-cinzel text-base font-bold">R$ ${total.toFixed(2).replace('.', ',')}</span>
        </div>
        <div class="mb-4 flex justify-between items-center pt-1.5">
            <span class="text-white/60 text-[9px] tracking-[0.2em] uppercase font-semibold">À vista no PIX <span class="text-white/40">(10% off)</span></span>
            <span class="text-white font-cinzel text-sm font-bold">R$ ${(total * 0.9).toFixed(2).replace('.', ',')}</span>
        </div>
    `;
    
    const footerHtml = `
        <div class="space-y-3 pt-2">
            <button onclick="simulateCheckout()" class="w-full bg-white hover:bg-white/90 text-black text-xs font-bold uppercase tracking-[0.3em] py-3.5 transition-all duration-300">
                Finalizar Compra
            </button>
            <button onclick="closePremiumDialog()" class="w-full bg-transparent hover:bg-white/5 border border-white/20 hover:border-white text-white text-[10px] font-bold uppercase tracking-[0.25em] py-3 transition-all duration-300">
                Continuar Comprando
            </button>
        </div>
    `;
    
    showPremiumDialog("SACOLA DE FRAGRÂNCIAS", listHtml, "CJ Parfums", footerHtml);
}

// Telefone comercial da Maison (DDI + DDD + Número - altere conforme necessário)
const MAISON_WHATSAPP = "5545999358224"; 

function simulateCheckout() {
    if (cartItems.length === 0) return;
    
    closePremiumDialog();
    
    // 1. Consolidar os itens da sacola
    const consolidated = {};
    cartItems.forEach(id => {
        consolidated[id] = (consolidated[id] || 0) + 1;
    });
    
    // 2. Montar a mensagem editorial formatada
    let messageText = "*CJ PARFUMS*\n\n";
    messageText += "Olá! Gostaria de finalizar a compra das seguintes assinaturas olfativas:\n\n";
    
    let total = 0;
    for (const [id, qty] of Object.entries(consolidated)) {
        const perfume = getPerfumeById(id);
        if (!perfume) continue;
        const price = getPerfumePrice(id);
        const itemTotal = price * qty;
        total += itemTotal;
        
        messageText += `• *${perfume.name.toUpperCase()}*\n`;
        
        if (id.startsWith('set01:')) {
            const selectedIds = id.split(':')[1].split(',');
            const names = selectedIds.map(sid => {
                const p = perfumesData.find(perf => perf.id === sid);
                return p ? p.name : sid;
            });
            messageText += `  _Fragrâncias: ${names.join(', ')}_\n`;
        }
        
        messageText += `  Qtd: ${qty}x — R$ ${price.toFixed(2).replace('.', ',')} (Subtotal: R$ ${itemTotal.toFixed(2).replace('.', ',')})\n\n`;
    }
    
    const totalPix = total * 0.9;
    
    messageText += `*TOTAL ESTIMADO:* R$ ${total.toFixed(2).replace('.', ',')}\n`;
    messageText += `*À VISTA NO PIX (10% OFF):* R$ ${totalPix.toFixed(2).replace('.', ',')}\n\n`;
    messageText += "Por favor, me informe as formas de pagamento.";
    
    // 3. Codificar texto para formato seguro de URL
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${MAISON_WHATSAPP}?text=${encodedText}`;
    
    // 4. Redirecionar de forma síncrona para evitar bloqueadores de pop-up no celular
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href = whatsappUrl;
    } else {
        window.open(whatsappUrl, '_blank');
    }
    
    // 5. Limpa o carrinho local e reinicia os estados de estoque imediatamente
    cartItems = [];
    updateCartBadge();
    perfumesData.forEach(p => {
        updateProductStockUI(p.id);
    });
    
    showToast("Redirecionado com sucesso para o WhatsApp da Maison.");
}

// Voltar ao Topo Scroll Handler
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// High-Performance Back to Top Observer
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    const heroSection = document.querySelector('section');
    
    if (!backToTopBtn || !heroSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                backToTopBtn.classList.add('opacity-0', 'translate-y-6', 'pointer-events-none');
            } else {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-6', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(heroSection);
}
