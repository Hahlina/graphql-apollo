import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './src/schemes',
    generates: {
        './src/types/types.ts': {
            plugins: ['typescript', 'typescript-resolvers'],
            config: {
                contextType: './context#DataSourceContext',
                mappers: {
                    EventDetail: './models#EventModel',
                    Comment: './models#CommentModel'
                }
            }
        }
    }
};

export default config;
