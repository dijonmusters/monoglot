# Monoglot

A Javascript blog.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

NodeJS - visit ![Node.js Downloads page](https://nodejs.org/en/download/) and follow the download and install instructions.

Yarn - visit ![Yarn installation page](https://classic.yarnpkg.com/en/docs/install) and follow the download and install instructions.

### Installing

Clone the repository

```
git clone https://github.com/dijonmusters/monoglot.git
```

Change into directory

```
cd monoglot
```

Install dependencies

```
yarn
```

## Running in Development mode

Run in development mode

```
yarn start
```

Visit http://localhost:8000 to view blog.

Visit http://localhost:8000/__graphql to query graphql schema.

## Running in Production mode

Build and serve the production application

```
yarn start:prod
```

Visit http://localhost:9000 to view production blog.

## Deployment

Every commit pushed to master will trigger a rebuild and deployment.

## Contributing

In order to contribute bug fixes or features please follow this process:

1. Fork the repository
2. Create a branch with the feature name - `git checkout -b new-feature`
3. Commit and push changes to your fork
4. Open PR to `master` branch in Monoglot repository - clearly explain what the change is and why
5. We will review the PR and either request changes or use a squash merge to include your contribution

## Authors

- **Jon Meyers** - _Project founder and contribution reviewer_ - [Dijon Musters](https://github.com/dijonmusters)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
