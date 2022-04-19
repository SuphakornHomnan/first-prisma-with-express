init-project:
	npm init -y
	yarn add @prisma/client
	yarn add express

prisma-migrate-db:
	npx prisma migrate dev --schema src/prisma/schema.prisma

introspect-prisma-db:
	npx prisma db pull --schema src/prisma/schema.prisma

gen-prisma-client:
	npx prisma generate --schema src/prisma/schema.prisma
