dev:
	docker-compose up --build --remove-orphans
test-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -V --build --remove-orphans --force-recreate 
push:
	docker-compose -f docker-compose.prod.yml build --force-rm
	docker image tag goldenstar_admin-ui:latest 31081991/gs_admin-ui
	docker image tag goldenstar_app-ui:latest 31081991/gs_app-ui
	docker image tag goldenstar_admin-ui-api:latest 31081991/gs_ui-api
	docker image tag goldenstar_admin-public-api:latest 31081991/gs_public-api
	docker push 31081991/gs_admin-ui
	docker push 31081991/gs_app-ui
	docker push 31081991/gs_ui-api
	docker push 31081991/gs_public-api
stop:
	docker-compose down --remove-orphans
db-console:
	docker exec -it db bash
app-ui-console:
	docker exec -it app-ui bash
panel-ui-console:
	docker exec -it admin-ui bash
panel-logs:
	docker logs admin-panel
api-console:
	docker exec -it public-api bash
api-logs:
	docker logs public-api
lint:
	npx eslint ./applications/adminPanelServer --ext .ts -f stylish
	npx eslint ./applications/publicApiServer --ext .ts -f stylish