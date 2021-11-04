import { FuseNavigation } from '@fuse/types';
import { NavigationService } from './navigation-role.service';

var navigationService: NavigationService = new NavigationService();
export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
            {
                id: 'accueil',
                title: 'HOME',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'home',
                url: '/accueil',
                hidden: false
            },
            {
                id: "brouillon",
                title: "BROUILLON",
                translate: "NAV.BROUILLON.TITLE",
                type: "collapsable",
                icon: "description",
                hidden: false,
                children: [
                    {
                        id: "saisie_manifeste",
                        title: "Saisie Manifeste",
                        translate: "NAV.SAISIE_MANIFESTE.TITLE",
                        type: "item",
                        url: "*",
                        hidden: false,
                    },
                    {
                        id: "modif_manif_non_enreg",
                        title: "Modification Manifeste non enregistre",
                        translate: "NAV.MODIF_MANIF_NON_ENREG.TITLE",
                        type: "item",
                        url: "/manifeste/brouillon/modifier",
                        hidden: false,
                    },
                    {
                        id: "consul_manif_non_enreg",
                        title: "Consultation déclarations",
                        translate: "NAV.CONSUL_DEC.TITLE",
                        type: "item",
                        url: "/declaration/brouillon/saisie",
                        hidden: true,
                    },
                    {
                        id: "saisie_modif_dec_details",
                        title: "Saisie/Modification déclaration en détails",
                        translate: "NAV.SAISIE_MODIF_DEC_DETAILS.TITLE",
                        type: "item",
                        url: "/declaration/brouillon/saisie_modification",
                        hidden: true,
                    }
                ]
            },
            {
                id: "enregistrement",
                title: "ENREGISTREMENT",
                translate: "NAV.ENREGISTREMENT.TITLE",
                type: "collapsable",
                icon: "addchart",
                hidden: false,
                children: [
                    {
                        id: "enregistrement_manifeste",
                        title: "Enregistrement Manifeste",
                        translate: "NAV.ENREGISTREMENT_MANIFESTE.TITLE",
                        type: "item",
                        url: "/manifeste/enregistrement/enreg_manif",
                        hidden: false,
                    },
                    {
                        id: "consultation_manif_enreg",
                        title: "Consultation Manifeste enregistre",
                        translate: "NAV.CONSUL_MANIF_ENREG.TITLE",
                        type: "item",
                        url: "*",
                        hidden: true,
                    },
                    {
                        id: "consul_reg_depot",
                        title: "Consultation Registre depôt",
                        translate: "NAV.CONSUL_REG_DEPOT.TITLE",
                        type: "item",
                        url: "*",
                        hidden: true,
                    },
                    {
                        id: "saisie_manif_comp",
                        title: "Saisie Manifeste Complementaire",
                        translate: "NAV.SAISIE_MANIF_COMP.TITLE",
                        type: "item",
                        url: "*",
                        hidden: true,
                    },
                    {
                        id: "ferm_manif_comp",
                        title: "Fermeture Manifeste Complementaire",
                        translate: "NAV.FERM_MANIF_COMP.TITLE",
                        type: "item",
                        url: "*",
                        hidden: true,
                    },
                    {
                        id: "apur_manif_cargo_manif_groupage",
                        title: "Apurement Manifeste cargo par Manifeste groupage",
                        translate: "NAV.APUR_MANIF_COMP.TITLE",
                        type: "item",
                        url: "*",
                        hidden: true,
                    },
                    {
                        id: "manif_regul_aerien",
                        title: "MANIFESTE DE RÉGULARISATION AÉRIEN",
                        translate: "NAV.MANIFESTE_DE_REGULARISATION_AERIEN.TITLE",
                        type: "item",
                        url: "*",
                        hidden: true
                    }
                ]
            }
        ]
    }
];