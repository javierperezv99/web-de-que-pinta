import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Palette,
  Shirt,
  Coffee,
  Gift,
  CreditCard,
  Image,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import logoAsset from "../assets/que-pinta-logo.jpeg.asset.json";
import tazaImg from "../assets/producto-taza.jpg.asset.json";
import camisetaImg from "../assets/producto-camiseta.jpg.asset.json";
import souvenirsImg from "../assets/producto-souvenirs.jpg.asset.json";
import tarjetasImg from "../assets/producto-tarjetas.jpg.asset.json";
import galeria1 from "../assets/galeria-1.jpg.asset.json";
import galeria2 from "../assets/galeria-2.jpg.asset.json";
import galeria3 from "../assets/galeria-3.jpg.asset.json";
import galeria4 from "../assets/galeria-4.jpg.asset.json";
import { ScrollInkJourney } from "../components/scroll-ink-journey";

const WHATSAPP_PRIMARY = "5354383056";
const WHATSAPP_SECONDARY = "5352922118";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Galería", href: "#galeria" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  {
    icon: Palette,
    title: "Diseño gráfico personalizado",
    description:
      "Creamos diseños únicos para tu marca, evento o regalo. Logotipos, invitaciones, tarjetas y arte digital a tu medida.",
    color: "text-brand-pink",
    bg: "bg-brand-pink/10",
  },
  {
    icon: Coffee,
    title: "Sublimación en tazas",
    description:
      "Tazas blancas de cerámica con impresión duradera y colores vivos. Ideales para regalos corporativos y personales.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Shirt,
    title: "Estampado en textiles",
    description:
      "Camisetas, pullovers y gorras personalizadas con sublimación de alta calidad que no se desgasta con los lavados.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
  },
  {
    icon: Gift,
    title: "Souvenirs y regalos",
    description:
      "Llaveros, imanes, rompecabezas, botellas y más detalles personalizables para cualquier ocasión especial.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: CreditCard,
    title: "Tarjetas de presentación",
    description:
      "Diseño e impresión de tarjetas de presentación profesionales que dejan una excelente primera impresión.",
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/10",
  },
  {
    icon: Image,
    title: "Impresión de fotografías",
    description:
      "Sublimación de fotos en diversos productos: cojines, tazas, cuadros y objetos decorativos para el hogar.",
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
  },
];

const products = [
  {
    name: "Taza personalizada",
    price: "Desde $8.00 USD",
    image: tazaImg.url,
    description: "Cerámica blanca de 11 oz con diseño a full color.",
  },
  {
    name: "Camiseta estampada",
    price: "Desde $12.00 USD",
    image: camisetaImg.url,
    description: "100% poliéster, colores brillantes y duraderos.",
  },
  {
    name: "Souvenirs variados",
    price: "Desde $2.00 USD",
    image: souvenirsImg.url,
    description: "Llaveros, imanes y detalles personalizables por mayor.",
  },
  {
    name: "Tarjetas de presentación",
    price: "Desde $5.00 USD",
    image: tarjetasImg.url,
    description: "Paquetes de 50 unidades, diseño incluido.",
  },
];

const gallery = [
  { src: galeria1.url, alt: "Colección de productos sublimados" },
  { src: galeria2.url, alt: "Camiseta con diseño de mandala" },
  { src: galeria3.url, alt: "Cojín personalizado con diseño geométrico" },
  { src: galeria4.url, alt: "Bolso y botella con estampado floral" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qué Pinta — Diseños e Impresiones en Sublimación" },
      {
        name: "description",
        content:
          "Qué Pinta: diseño gráfico e impresión por sublimación en Cuba. Tazas, camisetas, souvenirs, tarjetas de presentación y productos personalizados.",
      },
      { property: "og:title", content: "Qué Pinta — Diseños e Impresiones" },
      {
        property: "og:description",
        content:
          "Diseño gráfico e impresión por sublimación en Cuba. Productos personalizados con calidad y color.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function whatsappLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const text = `Hola, soy ${name || "un cliente"}. ${message}`;
    window.open(whatsappLink(WHATSAPP_PRIMARY, text), "_blank");
    setFormStatus("sent");
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollInkJourney
        logoUrl={logoAsset.url}
        contactUrl={whatsappLink(WHATSAPP_PRIMARY, "Hola, quiero crear algo único con Qué Pinta.")}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Qué Pinta logo"
              className="h-10 w-auto rounded-md sm:h-12"
              width={120}
              height={48}
            />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={whatsappLink(
                WHATSAPP_PRIMARY,
                "Hola, quiero más información sobre sus productos."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border/50 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappLink(
                  WHATSAPP_PRIMARY,
                  "Hola, quiero más información sobre sus productos."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="canvas-grid relative min-h-[calc(100svh-4.5rem)] overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-24"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
                <Sparkles className="h-4 w-4 text-brand-pink" />
                Diseño + Impresión en Cuba
              </div>

              <h1 className="font-display text-4xl font-extrabold text-foreground sm:text-5xl lg:text-7xl">
                Dale color a tus ideas con{" "}
                <span className="text-gradient-brand">Qué Pinta</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Somos un taller creativo de diseño gráfico e impresión por
                sublimación. Transformamos tus ideas en productos únicos:
                tazas, camisetas, souvenirs, tarjetas y mucho más.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href={whatsappLink(
                    WHATSAPP_PRIMARY,
                    "Hola, quiero hacer un pedido personalizado."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  Pedir por WhatsApp
                </a>
                <a
                  href="#productos"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
                >
                  Ver productos
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative border border-border bg-background p-3 shadow-soft">
                <div className="absolute -right-5 -top-5 h-14 w-14 rounded-full bg-brand-pink/80" />
                <div className="absolute -bottom-4 left-12 h-8 w-8 rounded-full bg-brand-teal/80" />
                <img
                  src={logoAsset.url}
                  alt="Qué Pinta — Diseños e Impresiones"
                  className="relative w-full max-w-md bg-background p-4 sm:max-w-lg"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nuestros servicios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Diseño e impresión de alta calidad para particulares, empresas y
              eventos. Todo personalizado a tu gusto.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group rounded-lg border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft ${service.title === "Diseño gráfico personalizado" || service.title === "Estampado en textiles" ? "lg:col-span-2" : ""}`}
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.bg}`}
                >
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="productos"
        className="bg-secondary/50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Productos personalizados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Estos son algunos de nuestros productos más solicitados. Los
              precios pueden variar según cantidad y diseño.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-card-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="mt-3 font-bold text-primary">{product.price}</p>
                  <a
                    href={whatsappLink(
                      WHATSAPP_PRIMARY,
                      `Hola, quiero pedir ${product.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Galería de trabajos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Muestras de productos que hemos personalizado para nuestros
              clientes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-card"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="nosotros"
        className="canvas-grid px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sobre Qué Pinta
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Qué Pinta nació con la idea de acercar el diseño y la impresión
            personalizada a todas las personas. Creemos que cada detalle cuenta:
            un regalo, una tarjeta, una camiseta o un souvenir pueden contar una
            historia.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Trabajamos con dedicación, materiales de calidad y mucho color para
            que tus proyectos se vean exactamente como los imaginaste.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink/10">
                <Sparkles className="h-6 w-6 text-brand-pink" />
              </div>
              <h3 className="font-semibold">Calidad garantizada</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tintas y materiales seleccionados para durar.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/10">
                <Palette className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="font-semibold">Diseño propio</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Creamos el arte si no tienes uno listo.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10">
                <Phone className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="font-semibold">Atención personalizada</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Te acompañamos en cada paso del pedido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Contáctanos
              </h2>
              <p className="mt-4 text-muted-foreground">
                ¿Tienes una idea? Escríbenos por WhatsApp o déjanos tu mensaje y
                te responderemos lo antes posible.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={whatsappLink(
                    WHATSAPP_PRIMARY,
                    "Hola, quiero más información."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:bg-secondary"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      WhatsApp principal
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +53 5 4383056
                    </p>
                  </div>
                </a>

                <a
                  href={whatsappLink(
                    WHATSAPP_SECONDARY,
                    "Hola, quiero más información."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:bg-secondary"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                    <Phone className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      WhatsApp alternativo
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +53 5 2922118
                    </p>
                  </div>
                </a>

                <a
                  href={whatsappLink(
                    WHATSAPP_PRIMARY,
                    "Hola, quiero solicitar un presupuesto."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:bg-secondary"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-pink/10">
                    <Mail className="h-6 w-6 text-brand-pink" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      Solicitar presupuesto
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Escríbenos por WhatsApp
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-teal/10">
                    <MapPin className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      Ubicación
                    </p>
                    <p className="text-sm text-muted-foreground">
                      La Habana, Cuba
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-semibold text-card-foreground">
                Envíanos un mensaje
              </h3>
              <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring transition-all placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuéntanos qué necesitas..."
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring transition-all placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enviar por WhatsApp
                </button>
                {formStatus === "sent" && (
                  <p className="text-center text-sm text-brand-teal">
                    ¡Mensaje listo! Se abrirá WhatsApp para que lo envíes.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden border-t border-border bg-background px-4 py-24">
        <div className="canvas-grid absolute inset-0 opacity-50" />
        <div className="relative z-10 h-[26rem] w-full max-w-2xl" aria-hidden="true" />
      </section>

      <footer className="border-t border-border bg-secondary/50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Qué Pinta"
                className="h-10 w-auto rounded-md"
                width={80}
                height={40}
              />
              <div>
                <p className="font-semibold text-foreground">Qué Pinta</p>
                <p className="text-sm text-muted-foreground">
                  Diseños e Impresiones
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Qué Pinta. Todos los derechos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
