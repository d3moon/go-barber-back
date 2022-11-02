

# Go Barber Back

Go Barber Back is a Node.js application for scheduling customer service providers.
Its objective is to make the process of contracting services of the most variable services more intuitive and organized.



## Installation

Install go-barber-back with npm

```bash
  go-barber-back cd
  npm install
  yarn dev:server
```
    
## Stack used

**Backend:** Node, Express and TypeScript

## API Documentation

#### Returns all appointments

```http
  GET localhost:3333/appointments
```

```json
 [
    {
    "provider": "Sam Sepi0l",
    "date": "2022-11-01T23:00:00.000Z",
    "id": "e374fe56-dc18-4b22-98ad-1010f906fdaa"
    }
]
```

#### Create a schedule

```http
  POST localhost:3333/appointments
```

| Body | Type | Description |
| :---------- | :--------- | :------------------------------------------ |
| `provider` | `string` | **Mandatory**. Service Provider Name |
| `date` | `string` | **Mandatory**. Appointment date |

## FAQ

#### Question 1

How does scheduling work?

Scheduling is done by sending the service provider and the appointment
## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samsepi0lss)

