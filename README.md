# E-commerce

## Tech Stack
- [React](https://reactjs.org/)

### Getting Started 

```sh
git clone https://github.com/adnin/e-commerce.git
cd e-commerce
```

### git-flow

```sh
git flow init
#Features

#Start a new feature
#Development of new features starting from the 'develop' branch.
git flow feature start feature-name

#Finish up a feature
#-Merges feature-name into 'develop'
#-Removes the feature branch
#-Switches back to 'develop' branch
git flow feature finish feature-name

#Publish a feature
#Publish a feature to the remote server so it can be used by other users.
git flow feature publish feature-name

#Getting a published feature
#Get a feature published by another user.
git flow feature pull origin feature-name

#You can track a feature on origin by using
git flow feature track feature-name

#Release

#Start a release
#start the release from. The commit must be on the 'develop' branch.
git flow release start RELEASE

#It's wise to publish the release branch after creating it to allow release commits by other developers. Do it similar to feature publishing with the command:
git flow release publish RELEASE

#You can track a remote release with the command:
git flow release track RELEASE

#Finish up a release
#-Merges the release branch back into 'master'
#-Tags the release with its name
#-Back-merges the release into 'develop'
#-Removes the release branch
git flow release finish RELEASE

#Don't forget to push your tags with
git push origin --tags

#Hot fixes

#git flow hotfix start
#Like the other git flow commands, a hotfix is started with
git flow hotfix start VERSION [BASENAME]
#The version argument hereby marks the new hotfix release name. Optionally you can specify a basename to start from.

#Finish a hotfix
#By finishing a hotfix it gets merged back into develop and master. Additionally the master merge is tagged with the hotfix version.
git flow hotfix finish VERSION
```

## Contributors 👨‍💻

- Adnin Onofre