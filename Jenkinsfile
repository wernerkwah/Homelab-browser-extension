pipeline {
agent any

stages {

stage('Checkout') {
steps {
git 'https://github.com/wernerkwah/Homelab-browser-extension.git'
}
}

stage('Validate Files') {
steps {
sh '''
ls -l
test -f manifest.json
test -f popup.html
test -f popup.js
'''
}
}

stage('Deploy') {
steps {
sh '''
mkdir -p /var/www/homelab-extension

cp manifest.json /var/www/homelab-extension/
cp popup.html /var/www/homelab-extension/
cp popup.js /var/www/homelab-extension/

echo "Deployment Complete"
'''
}
}
}

post {
success {
echo 'Deployment Successful'
}

failure {
echo 'Deployment Failed'
}
}
}
