import React from "react";
import { Link } from "react-router-dom";
import {
  PersonCard,
  PersonImageWrapper,
  Picture,
  PersonInfoWrapper,
  Name,
  Actor,
  Strong,
  PersonDetailsText,
  PersonDescription,
  DetailValue,
} from "../../common/Cast/styled";
import ImagePlaceholder from "../../components/ImagePlaceholderWrapper";
import { getImageUrl } from "../../services/tmdbApi";
import useIsMobileSmall from "../../hooks/useIsMobileSmall";

const PersonTile = ({ person, roleOrJob, isDetailed = false }) => {
  const { id, profile_path, name, birthday, place_of_birth, biography } =
    person;

  const isMobileSmall = useIsMobileSmall();

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Link
      to={`/people/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <PersonCard isDetailed={isDetailed}>
        <PersonImageWrapper isDetailed={isDetailed}>
          {profile_path ? (
            <Picture src={getImageUrl(profile_path)} alt={name} />
          ) : (
            <ImagePlaceholder type="person" />
          )}
        </PersonImageWrapper>
        <PersonInfoWrapper isDetailed={isDetailed}>
          <Name isDetailed={isDetailed}>
            <Actor>{name}</Actor>
            {roleOrJob && <Strong>{roleOrJob}</Strong>}
            {isDetailed && (
              <>
                {birthday && (
                  <PersonDetailsText>
                    <Strong>
                      {isMobileSmall ? "Birth:" : "Date of birth:"}
                    </Strong>
                    <DetailValue> {formatDate(birthday)}</DetailValue>{" "}
                  </PersonDetailsText>
                )}
                {place_of_birth && (
                  <PersonDetailsText>
                    <Strong>Place of birth:</Strong>{" "}
                    <DetailValue>{place_of_birth}</DetailValue>{" "}
                  </PersonDetailsText>
                )}
              </>
            )}
          </Name>
          {isDetailed && biography && (
            <PersonDescription>{biography}</PersonDescription>
          )}
        </PersonInfoWrapper>
      </PersonCard>
    </Link>
  );
};

export default PersonTile;
