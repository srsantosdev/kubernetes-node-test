kind create cluster --name=testk8s

kubectl get pods

kubectl get services

kubectl get nodes

kubectl get namespaces

kubectl port-forward service/nodeserver-service 3333:3333

kubectl apply -f kubernetes/deployment.yaml

kubectl apply -f kubernetes/service.yaml

kubectl create -f kubernetes/namespaces/development.yaml

kubectl create -f kubernetes/deployment.yaml -n=development

kubectl get pod -o wide -n development

kubectl get pod -n development