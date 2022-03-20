Passos para executar o docker do banco e das aplicações (as tabelas serão geradas automáticamente na execução da api)
#BD

docker pull postgres:latest

docker network create --driver bridge postgres-network

docker run --name postgres --network=postgres-network -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -d postgres



#API

#navegar no diretório raiz do projeto api onde se encontra o dockerfile

docker build -t api .

docker run -it --name api --network=postgres-network -p 8081:8081 -d api


#FRONT
#navegar no diretório raiz do projeto client onde se encontra o dockerfile

docker build -t front .

docker run -it --name front --network=postgres-network -p 8080:8080 -d front