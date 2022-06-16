# api_esportebit

api de monitoramento de alunos de educação fisica.


### Rota Teacher:
Create(post) - Cadastra um professor
{
	"name":"Teacher Example",
	"description":"Description example"
}

List(get) Retorna um array de professores


### Rota Students:

 Create(post)-Cadastra um estudante com os seguintes campos:
{
	"name":"Maria",
	"old":19,
	"heigth":1.69,
	"weight":57.8,
	"id_class":"17fe30d2-540c-479b-b5ac-4bab0b4d916e",
	"id_teacher":"b8100ac2-9b3d-4566-8be9-de79059c6b74"
}

List (get) - Retorna um array de estudantes


### ClassRoom:

 Create(post)-Cadastra uma classe com os seguintes campos:
{
	"name":"Quinto ano",
	"id_teacher":"b8100ac2-9b3d-4566-8be9-de79059c6b74"
}

List (get) - Retorna um array de Classes


### NoticeClassRoom:

 Create(post)-Cadastra umum aviso para classe com os seguintes campos:
{
	"title":"Retorno de aulas",
	"content":"Olá retornamos apos o feriado",
	"teacher":"081cccb4-6a58-4e81-8a00-3aef7c41b17c",
	"classRoom":"17fe30d2-540c-479b-b5ac-4bab0b4d916e"
	
}
List (get) - Retorna um array de avisos

