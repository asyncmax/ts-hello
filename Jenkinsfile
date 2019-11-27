pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }
  }
  stages {
    stage('Build') { 
      steps {
        sh 'yarn install'
        sh 'yarn build'
        sh 'yarn install --production'
      }
    }
  }
}
