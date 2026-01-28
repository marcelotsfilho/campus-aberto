"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, MapPin, Search, Filter, Calendar } from "lucide-react"

const activities = [
	// EVENTOS
	{
		name: "Semana 115 Anos CEFET-MG",
		description: "Participação na Semana de 115 Anos do CEFET-MG",
		// schedule: "Segunda a Sexta - 7h às 9h / 18h às 20h",
		// location: "Piscina Olímpica",
		// participants: "15 alunos por turma",
		// ageGroup: "6+ anos",
		// level: "Iniciante a Competitivo",
		image: "/semana-115-anos/semana115anos-1.jpg",
	},
	// CURSOS
	{
		name: "Lei de Incentivo ao Esporte",
		description: "Curso",
		// schedule: "Segunda a Sexta - 7h às 9h / 18h às 20h",
		// location: "Piscina Olímpica",
		// participants: "15 alunos por turma",
		// ageGroup: "6+ anos",
		// level: "Iniciante a Competitivo",
		image: "/oficinas/lei-incentivo.jpg",
	},
	{
		name: "Arte, Cultura e Tecnologia",
		description: "Curso",
		// schedule: "Segunda e Quinta - 18h às 20h",
		// location: "CEFEL",
		// participants: "atletas ilimitados por treino",
		// ageGroup: "14+ anos",
		// level: "Iniciante a Competitivo",
		image: "/oficinas/arte-cultura.jpg",
	},

	//OFICINAS
	{
		name: "Natação",
		description: "Oficina esportiva de natação",
		// schedule: "Terça e Quinta - 18h às 20h",
		// location: "Campo de Futebol",
		// participants: "22 jogadores por treino",
		// ageGroup: "16+ anos",
		// level: "Todos os níveis",
		image: "/oficinas/oficina-natacao.png",
	},
	{
		name: "Esportes Coletivos",
		description: "Modalidades indoor que visam o desenvolvimento de habilidades coletivas",
		// schedule: "Segunda e Quarta - 19h às 21h",
		// location: "Quadra Poliesportiva",
		// participants: "12 jogadores por treino",
		// ageGroup: "14+ anos",
		// level: "Iniciante a Avançado",
		image: "/oficinas/oficina-peteca.jpg",
	},
	{
		name: "Educação Física no ENEM",
		description: "Oficina",
		// schedule: "Terça e Quinta - 17h às 19h",
		// location: "Quadra de Basquete",
		// participants: "10 jogadores por treino",
		// ageGroup: "12+ anos",
		// level: "Todos os níveis",
		image: "/oficinas/ed-fisica-enem.webp",
	},
	{
		name: "Campus Aberto Runners",
		description: "Oficina dedicada a corrida de rua",
		// schedule: "Segunda a Sexta - 16h às 18h",
		// location: "Sala de Tênis de Mesa",
		// participants: "8 jogadores por treino",
		// ageGroup: "8+ anos",
		// level: "Todos os níveis",
		image: "/oficinas/equipecarunners.jpg",
	},

	//PESQUISA
	{
		name: "IPAQmove",
		description: "Projeto de pesquisa",
		// schedule: "Segunda a Sexta - 16h às 18h",
		// location: "Sala de Tênis de Mesa",
		// participants: "8 jogadores por treino",
		// ageGroup: "8+ anos",
		// level: "Todos os níveis",
		image: "/oficinas/ipaq-move.jpg",
	},

	//EVENTOS
	{
		name: "MOCITEC MG 2023",
		description: "Participação na MOCITEC MG 2023",
		// schedule: "Segunda a Sexta - 16h às 18h",
		// location: "Sala de Tênis de Mesa",
		// participants: "8 jogadores por treino",
		// ageGroup: "8+ anos",
		// level: "Todos os níveis",
		image: "/equipecampusaberto.jpg",
	},
	{
		name: "Campeonato Arthur Ribeiro",
		description: "Organização do Campeonato Arthur Ribeiro",
		// schedule: "Segunda a Sexta - 16h às 18h",
		// location: "Sala de Tênis de Mesa",
		// participants: "8 jogadores por treino",
		// ageGroup: "8+ anos",
		// level: "Todos os níveis",
		image: "/oficinas/camp-arthur-ribeiro-fem.jpg",
	},
	{
		name: "Palestra Campus Aberto Runners",
		description: "Palestra de abertura do Campus Aberto Runners",
		// schedule: "Segunda a Sexta - 16h às 18h",
		// location: "Sala de Tênis de Mesa",
		// participants: "8 jogadores por treino",
		// ageGroup: "8+ anos",
		// level: "Todos os níveis",
		image: "/oficinas/palestra-runners.jpg",
	},
	
	//AÇÕES SOCIAIS
	{
		name: "APAE",
		description: "Ação social na APAE de Leopoldina MG",
		// schedule: "Segunda a Sexta - 16h às 18h",
		// location: "Sala de Tênis de Mesa",
		// participants: "8 jogadores por treino",
		// ageGroup: "8+ anos",
		// level: "Todos os níveis",
		image: "/galeria/acao-apae.png",
	},
	{
		name: "Expo Leo 2025",
		description: "Participação na Expo Leo 2025",
		// schedule: "Segunda a Sexta - 16h às 18h",
		// location: "Sala de Tênis de Mesa",
		// participants: "8 jogadores por treino",
		// ageGroup: "8+ anos",
		// level: "Todos os níveis",
		image: "/oficinas/expo-leo.jpg",
	},
]

const filters = ["Todos", "Cursos", "Oficinas", "Pesquisa", "Eventos", "Atlética Panterão"]

const modalidades = [
	{ value: "todas", label: "Todos" },
	{ value: "cursos", label: "Cursos" },
	{ value: "oficinas", label: "Oficinas" },
	{ value: "pesquisa", label: "Pesquisa" },
	{ value: "eventos", label: "Eventos" },
	{ value: "atletica", label: "Atlética Panterão" },
	{ value: "acoes", label: "Ações Sociais" },
]

const periodos = [
	{ value: "todos", label: "Todos os períodos" },
	{ value: "manha", label: "Manhã" },
	{ value: "tarde", label: "Tarde" },
	{ value: "noite", label: "Noite" },
]

export function ActivitiesList() {
	const [selectedFilter, setSelectedFilter] = useState("Todos")
	const [expandedCard, setExpandedCard] = useState<number | null>(null)
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedModalidade, setSelectedModalidade] = useState("todas")
	const [selectedAno, setSelectedAno] = useState("todos")

	const filteredActivities = activities.filter((activity) => {
		const matchesSearch =
			activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			activity.description.toLowerCase().includes(searchTerm.toLowerCase())

		const matchesModalidade =
			selectedModalidade === "todas"
				? true
				: selectedModalidade === "cursos" && 
					["Lei de Incentivo ao Esporte", "Arte, Cultura e Tecnologia"].includes(activity.name)
				? true
				: selectedModalidade === "oficinas" &&
				  	["Natação", "Esportes Coletivos", "Educação Física no ENEM", "Campus Aberto Runners"].includes(activity.name)
				? true
				: selectedModalidade === "pesquisa" &&
				  	["IPAQmove"].includes(activity.name)
				? true
				: selectedModalidade === "eventos" &&
				  	["MOCITEC MG 2023", "Campeonato Arthur Ribeiro", "Palestra Campus Aberto Runners"].includes(activity.name)
				? true
				: selectedModalidade === "atletica" &&
				  	["MOCITEC MG 2023", "Campeonato Arthur Ribeiro"].includes(activity.name)
				? true
				: selectedModalidade === "acoes" &&
				  	["APAE", "Expo Leo 2025"].includes(activity.name)
				? true
				: false

		return matchesSearch && matchesModalidade
	})

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				{/* Search Filters */}
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
					<div className="flex flex-col lg:flex-row gap-4 items-center">
						{/* Search Input */}
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<input
								type="text"
								placeholder="Buscar por atividade..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
							/>
						</div>

						{/* Modalidade Filter */}
						<div className="relative">
							<Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<select
								value={selectedModalidade}
								onChange={(e) => setSelectedModalidade(e.target.value)}
								className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white dark:bg-gray-700 dark:text-white min-w-[200px]"
							>
								{modalidades.map((modalidade) => (
									<option key={modalidade.value} value={modalidade.value}>
										{modalidade.label}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Activities Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredActivities.map((activity, index) => (
						<Card
							key={index}
							className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
							onClick={() =>
								setExpandedCard(expandedCard === index ? null : index)
							}
						>
							<div className="relative">
								<img
									src={activity.image || "/placeholder.svg"}
									alt={activity.name}
									className="w-full h-48 object-cover"
								/>
								<div className="absolute top-4 right-4">
									<Badge className="bg-orange-500">{activity.level}</Badge>
								</div>
							</div>

							<CardContent className="p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
									{activity.name}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4">
									{activity.description}
								</p>

								<div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
									{activity.schedule && (
										<div className="flex items-center space-x-2">
											<Clock className="h-4 w-4" />
											<span>{activity.schedule}</span>
										</div>
									)}
									{activity.location && (
										<div className="flex items-center space-x-2">
											<MapPin className="h-4 w-4" />
											<span>{activity.location}</span>
										</div>
									)}
									{activity.participants && (
										<div className="flex items-center space-x-2">
											<Users className="h-4 w-4" />
											<span>{activity.participants}</span>
										</div>
									)}
								</div>

								{/* Obs: Descomentar essa parte quando for adicionar informações sobre cada projeto e alterar, pois está configurado para faixa etária
								{expandedCard === index && (
									<div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
										<div className="flex items-center justify-between text-sm">
											<span className="font-medium">Informações:</span>
											<span className="text-orange-600">
												{activity.ageGroup}
											</span>
										</div>
									</div>
								)}
								*/}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
