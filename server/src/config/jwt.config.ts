import { registerAs } from "@nestjs/config";

export default registerAs('jwt', () => {
    return {

        secret: 'secret',
        signOptions: {
            expiresIn: '1hr'
        }

    }
})