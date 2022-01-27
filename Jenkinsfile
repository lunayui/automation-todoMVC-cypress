pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/included:9.3.1'
      args '--entrypoint=\'\' -u root'
    }
  }
  stages {
    
    stage('build') {
      steps {
        // there a few default environment variables on Jenkins
        // on local Jenkins machine (assuming port 8080) see
        // http://localhost:8080/pipeline-syntax/globals#env
        echo "**********RUNNING BUILD  ${env.BUILD_ID} on ${env.JENKINS_URL}********"
        sh 'npm install --force'
      }
    }
    stage('Unit Test') {
      steps {
        // there a few default environment variables on Jenkins
        // on local Jenkins machine (assuming port 8080) see
        // http://localhost:8080/pipeline-syntax/globals#env
        echo "**********RUNNING BUILD  ${env.BUILD_ID} on ${env.JENKINS_URL}********"
        sh 'npm run test --browser chrome --spec cypress/integration/*.js'
      }
    }
    stage('E2E Tests') {
      steps {
        sh 'npm ci'
        sh 'npx cypress run  --browser chrome --spec cypress/integration/*.js'
      }
    }
  }
  post{
    always{
        publishHTML([allowMissing: true, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
    }
  }
}