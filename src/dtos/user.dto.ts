import { z } from "zod";

export const CreateUserDto = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters long").regex(/(?=.*[a-z])/, "Password must contain atleast one lowercase letter").regex(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter').regex(/(?=.*[!@#$%^&*(),.?":{}|<>])/, 'Password must contain at least one symbol')
})


export const UpdateUserDto = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters long").regex(/(?=.*[a-z])/, "Password must contain atleast one lowercase letter").regex(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter').regex(/(?=.*[!@#$%^&*(),.?":{}|<>])/, 'Password must contain at least one symbol')
})


export const UserDto = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters long").regex(/(?=.*[a-z])/, "Password must contain atleast one lowercase letter").regex(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter').regex(/(?=.*[!@#$%^&*(),.?":{}|<>])/, 'Password must contain at least one symbol')


})



