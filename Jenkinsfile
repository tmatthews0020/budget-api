node {
    stage('Checkout'){
        checkout scm
    }
    stage('Build'){
        checkout scm;
         docker.withRegistry('https://index.docker.io/v1/', 'docker-credentials') {
            def image = docker.build("tmatthews0020/budget-api:${env.BUILD_ID}");
            image.push();
            image.push('latest');
         }
    }
}